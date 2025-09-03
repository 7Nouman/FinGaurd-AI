from typing import Dict, Optional, Tuple

from transformers import pipeline


# Initialize the Hugging Face sentiment pipeline lazily to avoid cold-start delays
_sentiment_analyzer = None


def get_sentiment_analyzer():
    global _sentiment_analyzer
    if _sentiment_analyzer is None:
        _sentiment_analyzer = pipeline(
            "sentiment-analysis",
            model="distilbert-base-uncased-finetuned-sst-2-english",
        )
    return _sentiment_analyzer


IPO_FRAUD_KEYWORDS = [
    "guaranteed allotment",
    "sure allotment",
    "firm allotment",
    "ipo confirmed",
]

PUMP_AND_DUMP_KEYWORDS = [
    "buy now",
    "multibagger",
    "huge rally",
    "target price",
]

FAKE_ADVISOR_KEYWORDS = [
    "risk-free",
    "guaranteed profit",
    "double your money",
]


def _match_keywords(lower_text: str) -> Tuple[Optional[str], Optional[str]]:
    # Check for each category; return the first match with reason snippet
    for phrase in IPO_FRAUD_KEYWORDS:
        if phrase in lower_text:
            return (
                "IPO Fraud",
                "Message contains guaranteed allotment claim which is a common IPO scam."
                if "allotment" in phrase or "ipo confirmed" in phrase
                else f"Message contains IPO fraud phrase: '{phrase}'.",
            )

    for phrase in PUMP_AND_DUMP_KEYWORDS:
        if phrase in lower_text:
            return (
                "Pump & Dump",
                f"Message contains pump-and-dump phrase: '{phrase}'.",
            )

    for phrase in FAKE_ADVISOR_KEYWORDS:
        if phrase in lower_text:
            return (
                "Fake Advisor",
                f"Message contains fake-advisor phrase: '{phrase}'.",
            )

    return None, None


def analyze_text(text: str) -> Dict[str, str]:
    """Analyze input text for fraud risk.

    Logic:
    - If category keywords found: High risk with fraud_type
    - Else if positive sentiment score > 0.9: Medium risk
    - Else: Low risk
    """
    if not text or not text.strip():
        return {
            "risk": "Low",
            "fraud_type": "None",
            "reason": "Empty or whitespace-only message.",
        }

    lower_text = text.lower()

    fraud_type, reason = _match_keywords(lower_text)
    if fraud_type:
        return {
            "risk": "High",
            "fraud_type": fraud_type,
            "reason": reason,
        }

    # No keyword matches; fall back to positive sentiment as proxy for promotional hype
    analyzer = get_sentiment_analyzer()
    result = analyzer(text)[0]
    label = result.get("label", "")
    score = float(result.get("score", 0.0))

    if label.upper() == "POSITIVE" and score > 0.9:
        return {
            "risk": "Medium",
            "fraud_type": "None",
            "reason": "Message is highly promotional/positive which can indicate hype.",
        }

    return {
        "risk": "Low",
        "fraud_type": "None",
        "reason": "No risky keywords and sentiment not excessively promotional.",
    }



<<<<<<< HEAD
import React, { useState } from 'react';
import { Brain, Shield, Zap, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/Card';
import { Button } from './ui/Button';
import { Textarea } from './ui/Textarea';
import ResultCard from './ResultCard';

type ApiResult = { risk: 'Low' | 'Medium' | 'High'; reason: string };

const DEMO_TEXT =
  'Guaranteed 200% return in 7 days! Join our Telegram group now for IPO allotments.';
const DEMO_RESPONSE: ApiResult = {
  risk: 'High',
  reason:
    'Message contains unrealistic return promises and references to unverified Telegram groups, which are common in Ponzi and IPO fraud schemes.',
};

export const FraudDetector: React.FC = () => {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState<ApiResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadDemo = () => setMessage(DEMO_TEXT);

  const handleScan = async () => {
    if (!message.trim()) return;
    setError('');
    setResult(null);
    setLoading(true);
    try {
      // Simulated loading per spec
      await new Promise((r) => setTimeout(r, 2000));

      const resp = await fetch('http://localhost:8000/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: message }),
      });

      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = (await resp.json()) as ApiResult;
      // Fallback shape safety
      setResult({ risk: (data.risk as any) || 'Low', reason: data.reason || '' });
    } catch (e) {
      // On error, show demo response
      setError('Backend unavailable. Showing demo response.');
      setResult(DEMO_RESPONSE);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-security">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <header className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Shield className="text-primary" />
            <h1 className="text-4xl font-extrabold bg-gradient-primary bg-clip-text text-transparent">
              FinGuard AI
            </h1>
          </div>
          <p className="text-foreground/70">Advanced fraud detection for financial messages</p>
        </header>

        <Card className="mb-6">
          <CardHeader className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain size={18} className="text-primary" />
              <h2 className="text-xl font-semibold">Message Scanner</h2>
            </div>
            <button
              onClick={loadDemo}
              className="text-sm underline text-primary hover:opacity-90"
            >
              Load demo text
            </button>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Enter financial message to analyze:"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {error && (
              <div className="mt-3 inline-flex items-center gap-2 text-danger">
                <AlertCircle size={16} />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button onClick={handleScan} disabled={loading || !message.trim()} className="gap-2">
                <Zap size={16} />
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-primary/40 border-t-white animate-spin" />
                    Scanning...
                  </span>
                ) : (
                  'Scan Message'
                )}
              </Button>
              <Button variant="outline" onClick={loadDemo}>Demo</Button>
            </div>
          </CardContent>
        </Card>

        <ResultCard result={result} />

        <Card className="mt-6">
          <CardContent className="py-5 text-sm text-foreground/70">
            <div>Powered by FastAPI backend with HuggingFace transformers and rule-based analysis</div>
            <div className="mt-1">Backend: http://localhost:8000/scan</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FraudDetector;
=======
import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Brain, Shield, Zap, AlertCircle } from 'lucide-react'
import { ResultCard, type ScanResult } from './ResultCard'

const DEMO_TEXT =
  'Guaranteed 200% return in 7 days! Join our Telegram group now for IPO allotments.'

const DEMO_RESPONSE: ScanResult = {
  risk: 'High',
  reason:
    'Message contains unrealistic return promises and references to unverified Telegram groups, which are common in Ponzi and IPO fraud schemes.',
}

export function FraudDetector() {
  const [text, setText] = React.useState('')
  const [result, setResult] = React.useState<ScanResult | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  async function handleScan() {
    if (!text.trim()) return
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const res = await fetch('http://localhost:8000/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      if (!res.ok) throw new Error(String(res.status))
      const data = (await res.json()) as ScanResult
      setResult(data)
    } catch (e) {
      setError('Unable to reach the backend. Please ensure it is running.')
    } finally {
      setLoading(false)
    }
  }

  async function handleDemo() {
    setText(DEMO_TEXT)
    setError(null)
    setResult(null)
    setLoading(true)
    await new Promise((r) => setTimeout(r, 2000))
    setResult(DEMO_RESPONSE)
    setLoading(false)
  }

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-2xl space-y-8">
        <header className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/60 px-3 py-1 text-xs text-muted-foreground shadow-[var(--shadow-card)]">
            <Shield className="h-4 w-4" />
            FinGuard AI
          </div>
          <h1 className="text-4xl font-bold tracking-tight bg-[var(--gradient-primary)] bg-clip-text text-transparent">
            FinGuard AI
          </h1>
          <p className="text-sm text-muted-foreground">
            Advanced fraud detection for financial messages
          </p>
        </header>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Brain className="h-5 w-5 text-muted-foreground" />
            <CardTitle>Message Scanner</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste the suspicious message here..."
              aria-label="Message to scan"
            />
            <div className="flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={handleDemo}
                className="underline text-muted-foreground hover:text-foreground"
              >
                Load demo text
              </button>
              <div className="flex items-center gap-2">
                <Button onClick={handleScan} disabled={loading || !text.trim()}>
                  <span className="inline-flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    ⚡ Scan Message
                  </span>
                </Button>
                <Button variant="outline" onClick={handleDemo} disabled={loading}>
                  Demo
                </Button>
              </div>
            </div>

            {loading && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
                Scanning...
              </div>
            )}

            {error && (
              <div className="flex items-center gap-2 text-sm text-danger">
                <AlertCircle className="h-4 w-4" /> {error}
              </div>
            )}
          </CardContent>
        </Card>

        <section aria-live="polite">
          {result && <ResultCard result={result} />}
        </section>

        <footer>
          <Card className="bg-card/60">
            <CardContent className="text-center text-xs text-muted-foreground">
              <div className="pt-6">Powered by FastAPI backend with HuggingFace transformers and rule-based analysis</div>
              <div className="mt-1">
                Endpoint: <span className="text-foreground">http://localhost:8000/scan</span>
              </div>
            </CardContent>
          </Card>
        </footer>
      </div>
    </div>
  )
}
>>>>>>> fc8eeb8 (P1)



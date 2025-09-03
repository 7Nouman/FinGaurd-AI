# 🛡️ FinGuard AI - Fraud Detection Prototype

A hackathon prototype that helps prevent frauds in IPOs, fake advisors, and pump-and-dump schemes using AI-powered text analysis.

## 🏗️ Architecture

- **Backend**: FastAPI + Hugging Face Transformers
- **Frontend**: React + Vite + Tailwind CSS
- **AI Model**: DistilBERT for sentiment analysis + rule-based keyword detection

## 🚀 Quick Start

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Start the FastAPI server:**
   ```bash
   python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

4. **Test the backend:**
   ```bash
   python test.py
   ```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`

## 🎯 Demo Flow

1. **Start both backend and frontend servers**
2. **Open frontend in browser** (`http://localhost:5173`)
3. **Paste this sample message:**
   ```
   Guaranteed IPO allotment if you invest ₹50,000 today!
   ```
4. **Click "Scan Message"**
5. **Expected result:**
   - 🔴 High Risk
   - 🏷 IPO Fraud
   - 📌 Reason: "Message contains guaranteed allotment claim which is a common IPO scam."

## 🔍 How It Works

### Detection Logic

1. **Keyword Matching**: Scans for fraud-related phrases
   - IPO Fraud: "guaranteed allotment", "sure allotment", "IPO confirmed"
   - Pump & Dump: "buy now", "multibagger", "huge rally", "target price"
   - Fake Advisor: "risk-free", "guaranteed profit", "double your money"

2. **AI Sentiment Analysis**: Uses Hugging Face DistilBERT model
   - Analyzes promotional/positive sentiment
   - Identifies overly hyped messages

3. **Risk Scoring**:
   - **High Risk**: Keywords found → specific fraud type identified
   - **Medium Risk**: No keywords but highly positive sentiment (>0.9)
   - **Low Risk**: No keywords and normal sentiment

### API Endpoints

- `POST /scan`: Accepts `{"text": "message"}` and returns fraud analysis
- `GET /`: Health check endpoint

## 🛠️ Technical Details

### Backend Dependencies
- FastAPI: Web framework
- Uvicorn: ASGI server
- Transformers: Hugging Face AI models
- PyTorch: Deep learning backend
- Pydantic: Data validation

### Frontend Dependencies
- React 18: UI framework
- Vite: Build tool and dev server
- Tailwind CSS: Utility-first CSS framework

## 📱 Features

- **Responsive Design**: Mobile-friendly interface
- **Real-time Analysis**: Instant fraud detection
- **Visual Risk Indicators**: Color-coded risk levels
- **Loading States**: User feedback during analysis
- **Error Handling**: Graceful error messages

## 🔧 Development

### Backend Development
- Edit `detection.py` to modify fraud detection logic
- Add new keywords in the keyword arrays
- Modify risk scoring in `analyze_text()` function

### Frontend Development
- Edit `src/App.jsx` for main UI changes
- Edit `src/components/ResultCard.jsx` for result display
- Modify Tailwind classes in components for styling

## 🚨 Security Notes

- This is a prototype for demonstration purposes
- The Hugging Face model downloads on first use
- CORS is enabled for local development
- No authentication or rate limiting implemented

## 📄 License

Built for hackathon demonstration purposes.

---

**Happy Hacking! 🎉**

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from detection import analyze_text


class ScanRequest(BaseModel):
    text: str


app = FastAPI(title="FinGuard AI", version="0.1.0")

# Enable CORS for local frontend dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/scan")
def scan_message(payload: ScanRequest):
    if payload is None or payload.text is None:
        raise HTTPException(status_code=400, detail="Invalid request body")
    result = analyze_text(payload.text)
    return result


@app.get("/")
def root():
    return {"service": "FinGuard AI", "status": "ok"}



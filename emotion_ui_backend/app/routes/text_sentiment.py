from fastapi import APIRouter
from app.services.text_service import analyze_text

router = APIRouter()

@router.get("/sentiment")
def text_sentiment(text: str):
    sentiment = analyze_text(text)
    return {"text_sentiment": sentiment}

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware 
from app.routes import video_emotion, text_sentiment

app = FastAPI(title="Emotion-Driven UI 🎭")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Register routes
app.include_router(video_emotion.router, prefix="/video")
app.include_router(text_sentiment.router, prefix="/text")

@app.get("/")
def root():
    return {"msg": "Emotion Driven UI Backend Running 🚀"}

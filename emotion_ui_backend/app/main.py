from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware 
from app.routes import video_emotion, text_sentiment

app = FastAPI(title="Emotion-Driven UI 🎭")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://mood-matrix-vert.vercel.app",
    ],
    allow_origin_regex=r"https://.*\.vercel\.app",  # all Vercel deployments (preview + prod)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)
# Register routes
app.include_router(video_emotion.router, prefix="/video")
app.include_router(text_sentiment.router, prefix="/text")

@app.get("/")
def root():
    return {"msg": "Emotion Driven UI Backend Running 🚀"}




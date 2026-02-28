# from fastapi import APIRouter
# from app.services.video_service import analyze_video

# router = APIRouter()

# @router.get("/detect")
# def detect_emotion():
#     result = analyze_video()
#     return {"video_emotion": result}



from fastapi import APIRouter
from pydantic import BaseModel
import base64, cv2, numpy as np
from deepface import DeepFace

router = APIRouter()

class FrameData(BaseModel):
    frame: str

@router.post("/frame-detect")
def frame_detect(data: FrameData):
    print("📥 Frame received from frontend")

    try:
        # Decode base64 -> OpenCV image
        img_data = base64.b64decode(data.frame.split(",")[1])
        nparr = np.frombuffer(img_data, np.uint8)
        frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        result = DeepFace.analyze(frame, actions=["emotion"], enforce_detection=False)

        if isinstance(result, list):  # DeepFace returns a list
            dominant = result[0]["dominant_emotion"]
        else:
            dominant = result["dominant_emotion"]

        print(f"✅ Dominant emotion: {dominant}")
        return {"video_emotion": dominant}

    except Exception as e:
        print("❌ Error:", e)
        return {"video_emotion": "neutral", "error": str(e)}

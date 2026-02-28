import cv2
from deepface import DeepFace

# def analyze_video():
#     cap = cv2.VideoCapture(0)  # webcam
#     emotions = []

#     for _ in range(20):  # capture 20 frames
#         ret, frame = cap.read()
#         if not ret:
#             break
#         try:
#             result = DeepFace.analyze(frame, actions=['emotion'], enforce_detection=False)
#             emotions.append(result[0]['dominant_emotion'])
#         except Exception:
#             continue
    
#     cap.release()
#     if emotions:
#         # Return most common emotion
#         return max(set(emotions), key=emotions.count)
#     return "neutral"


def analyze_video():
    cap = cv2.VideoCapture(0)

    if not cap.isOpened():
        print("❌ Webcam not accessible in backend")
        return "camera_not_found"

    emotions = []
    for _ in range(10000):
        ret, frame = cap.read()
        if not ret:
            continue
        try:
            result = DeepFace.analyze(frame, actions=['emotion'], enforce_detection=False)
            print("🔍 Detected:", result)
            emotions.append(result[0]['dominant_emotion'])
        except Exception as e:
            print("⚠️ Error:", e)

    cap.release()
    if emotions:
        return max(set(emotions), key=emotions.count)
    return "neutral"

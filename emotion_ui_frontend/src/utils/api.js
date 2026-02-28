import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000", // backend URL
});

// Video emotion detection
export const detectVideoEmotion = async () => {
  const res = await API.get("/video/detect");
  return res.data.video_emotion; // "happy", "sad", etc. directly
};

// Text sentiment detection
export const detectTextSentiment = async (text) => {
  const res = await API.get(`/text/sentiment?text=${encodeURIComponent(text)}`);
  const raw = res.data.text_sentiment; // e.g. "positive"

  // ✅ Map backend response -> frontend mood
  const sentimentMap = {
    positive: "happy",
    negative: "sad",
    anger: "angry",
    neutral: "neutral",
  };

  const mood = sentimentMap[raw] || "neutral";

  // Return both raw + mapped mood
  return { raw, mood };
};

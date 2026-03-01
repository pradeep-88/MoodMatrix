# MoodMatrix

A full-stack application that detects your mood from **live webcam** (facial emotion) and **text input** (sentiment analysis), then adapts the UI theme, music suggestions, and tracks mood history.

---

## Project Overview

| Component | Tech Stack | Purpose |
|-----------|------------|---------|
| **Backend** | FastAPI, DeepFace, NLTK (Vader), OpenCV | Video frame emotion detection, text sentiment API |
| **Frontend** | React 19, Vite 7, Tailwind CSS, Framer Motion, Recharts | Webcam feed, sentiment input, mood overlay, music player, mood history chart |

### Features

- **Live webcam emotion detection** — Captures frames, sends to backend; DeepFace returns dominant emotion (happy, sad, angry, neutral, etc.).
- **Text sentiment analysis** — Type a sentence; backend uses NLTK Vader to return positive/negative/neutral; UI maps to mood.
- **Dynamic theme** — App theme (colors/gradient) changes based on current mood.
- **Mood overlay** — Current detected mood displayed on the camera feed.
- **Music player** — Mood-based music suggestions/player.
- **Mood history chart** — Timeline of detected moods (Recharts).

---

## Prerequisites

- **Python 3.9+** (recommended: 3.10 or 3.11) — for backend
- **Node.js 18+** and **npm** — for frontend
- **Webcam** — for video emotion detection (optional; text sentiment works without it)
- **~2–3 GB free disk** — for Python ML dependencies (TensorFlow, OpenCV, DeepFace)

---

## Repository Structure

```
Emotion/
├── emotion_ui_backend/          # FastAPI backend
│   ├── app/
│   │   ├── main.py               # App entry, CORS, routes
│   │   ├── routes/
│   │   │   ├── video_emotion.py  # POST /video/frame-detect
│   │   │   └── text_sentiment.py # GET /text/sentiment?text=...
│   │   └── services/
│   │       ├── video_service.py  # DeepFace analysis (optional)
│   │       └── text_service.py   # NLTK Vader sentiment
│   └── requirements.txt
├── emotion_ui_frontend/         # React + Vite frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/          # Navbar, Webcam, MoodOverlay, etc.
│   │   ├── hooks/               # useTheme, useWebcam
│   │   └── utils/api.js         # Axios calls to backend
│   ├── package.json
│   ├── .env.example
│   └── vite.config.js
```

---

## How to Run the Project

You need to run **both** the backend and the frontend. Use two terminal windows/tabs.

---

### Step 1: Backend (FastAPI)

1. **Open a terminal** and go to the backend folder:

   ```bash
   cd /Volumes/myssd/Emotion/emotion_ui_backend
   ```

2. **Create and activate a virtual environment** (recommended):

   ```bash
   python3 -m venv .venv
   source .venv/bin/activate   # On Windows: .venv\Scripts\activate
   ```

3. **Install dependencies** (this may take several minutes due to TensorFlow/OpenCV/DeepFace):

   ```bash
   pip install -r requirements.txt
   ```

   If you get errors (e.g. with `tensorflow` or `deepface`), try:

   ```bash
   pip install --upgrade pip
   pip install -r requirements.txt
   ```

4. **Download NLTK data** (used by text sentiment). The app downloads `vader_lexicon` on first use; to pre-download:

   ```bash
   python -c "import nltk; nltk.download('vader_lexicon')"
   ```

5. **Start the server** on port **8000**:

   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

   You should see something like:

   ```text
   Uvicorn running on http://127.0.0.1:8000
   ```

6. **Verify backend**: Open in browser or curl:

   ```bash
   curl http://127.0.0.1:8000/
   # Expected: {"msg":"Emotion Driven UI Backend Running 🚀"}
   ```

   Keep this terminal running.

---

### Step 2: Frontend (React + Vite)

1. **Open a second terminal** and go to the frontend folder:

   ```bash
   cd /Volumes/myssd/Emotion/emotion_ui_frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Optional — Environment variable**  
   The frontend calls the backend at `http://127.0.0.1:8000` by default (see `src/utils/api.js`). If your backend runs elsewhere, create a `.env` file (see `.env.example`):

   ```bash
   cp .env.example .env
   # Edit .env and set, e.g.: VITE_API_URL=http://127.0.0.1:8000
   ```

   If you use `VITE_API_URL`, you must use it in `api.js` (e.g. `baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"`). The current code uses a hardcoded URL.

4. **Start the dev server** (default port **5173**):

   ```bash
   npm run dev
   ```

   You should see:

   ```text
   Vite dev server running at http://localhost:5173
   ```

5. **Open the app**: In your browser go to **http://localhost:5173** (or the URL Vite prints).

---

## Usage Summary

| What you want | What to do |
|---------------|------------|
| **Run backend only** | `cd emotion_ui_backend && source .venv/bin/activate && uvicorn app.main:app --reload --port 8000` |
| **Run frontend only** | `cd emotion_ui_frontend && npm install && npm run dev` |
| **Use webcam emotion** | Backend must be running; allow browser camera access when the app asks. |
| **Use text sentiment only** | Backend must be running; type in the sentiment box and analyze. |

---

## API Endpoints (Backend)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check; returns welcome message. |
| POST | `/video/frame-detect` | Body: `{ "frame": "data:image/...;base64,..." }`. Returns `{ "video_emotion": "happy" \| "sad" \| ... }`. |
| GET | `/text/sentiment?text=...` | Returns `{ "text_sentiment": "positive" \| "negative" \| "neutral" }`. |

CORS is set to allow `http://localhost:5173` and `http://127.0.0.1:5173`.

---

## Troubleshooting

- **Backend: "No module named 'deepface'" / TensorFlow errors**  
  Ensure the virtual env is activated and run `pip install -r requirements.txt` again. Use Python 3.10 or 3.11 if 3.12 causes issues.

- **Frontend: "Network Error" or emotion never updates**  
  Backend must be running on `http://127.0.0.1:8000`. If it runs on another host/port, set `VITE_API_URL` and point `api.js` to it.

- **Webcam not working**  
  Grant camera permission in the browser. For frame-detect to work, the backend must be up and the frontend must send frames to `/video/frame-detect`.

- **NLTK "Vader_lexicon" not found**  
  Run: `python -c "import nltk; nltk.download('vader_lexicon')"` inside the backend virtual env.

- **Port already in use**  
  Backend: use another port, e.g. `uvicorn app.main:app --reload --port 8001`, and set frontend API base URL to that port.  
  Frontend: Vite will prompt to use another port if 5173 is busy.

---

## Quick Copy-Paste (Unix/macOS)

**Terminal 1 — Backend:**

```bash
cd /Volumes/myssd/Emotion/emotion_ui_backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

**Terminal 2 — Frontend:**

```bash
cd /Volumes/myssd/Emotion/emotion_ui_frontend
npm install && npm run dev
```

Then open **http://localhost:5173** in your browser.


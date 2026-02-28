// import { useEffect, useRef } from "react";
// import axios from "axios";

// export const useWebcam = (setMood, interval = 3000) => {
//   const videoRef = useRef(null);

//   // Start webcam
//   useEffect(() => {
//     const startCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (err) {
//         console.error("Camera access error:", err);
//       }
//     };

//     startCamera();
//   }, []);

//   // Capture frame + send to backend
//   useEffect(() => {
//     const timer = setInterval(() => {
//       captureAndSendFrame();
//     }, interval);

//     return () => clearInterval(timer);
//   }, []);

//   const captureAndSendFrame = async () => {
//     if (!videoRef.current) return;

//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d");
//     canvas.width = videoRef.current.videoWidth;
//     canvas.height = videoRef.current.videoHeight;
//     context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//     const frame = canvas.toDataURL("image/jpeg");

//     try {
//       const res = await axios.post("http://127.0.0.1:8000/video/frame-detect", {
//         frame,
//       });
//       setMood(res.data.video_emotion);
//     } catch (err) {
//       console.error("Frame send error:", err);
//     }
//   };

//   return videoRef;
// };




// import { useEffect, useRef } from "react";
// import axios from "axios";

// export const useWebcam = (setMood, interval = 3000) => {
//   const videoRef = useRef(null);

//   // Start webcam
//   useEffect(() => {
//     const startCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (err) {
//         console.error("❌ Camera access error:", err);
//       }
//     };

//     startCamera();
//   }, []);

//   // Capture frame + send to backend
//   useEffect(() => {
//     const timer = setInterval(() => {
//       captureAndSendFrame();
//     }, interval);

//     return () => clearInterval(timer);
//   }, [interval]); // ✅ cleaner

//   const captureAndSendFrame = async () => {
//     if (!videoRef.current) return;

//     // ⚠️ Prevent sending blank frames
//     if (videoRef.current.videoWidth === 0 || videoRef.current.videoHeight === 0) {
//       console.warn("⚠️ Webcam not ready yet, skipping frame...");
//       return;
//     }

//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d");
//     canvas.width = videoRef.current.videoWidth;
//     canvas.height = videoRef.current.videoHeight;
//     context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//     const frame = canvas.toDataURL("image/jpeg");

//     try {
//       console.log("📸 Sending frame to backend...");
//       const res = await axios.post("http://127.0.0.1:8000/video/frame-detect", { frame });
//       console.log("✅ Backend response:", res.data);
//       setMood(res.data.video_emotion);
//     } catch (err) {
//       console.error("❌ Frame send error:", err);
//     }
//   };

//   return videoRef;
// };





// import { useEffect, useRef } from "react";
// import axios from "axios";

// export const useWebcam = (setMood, interval = 3000) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const startCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//           console.log("🎥 Webcam started");
//         }
//       } catch (err) {
//         console.error("❌ Camera access error:", err);
//       }
//     };

//     startCamera();
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       captureAndSendFrame();
//     }, interval);

//     return () => clearInterval(timer);
//   }, [interval]);

//   const captureAndSendFrame = async () => {
//     if (!videoRef.current || videoRef.current.videoWidth === 0) {
//       console.warn("⚠️ Webcam not ready yet");
//       return;
//     }

//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");
//     canvas.width = videoRef.current.videoWidth;
//     canvas.height = videoRef.current.videoHeight;
//     ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//     const frame = canvas.toDataURL("image/jpeg");

//     try {
//       console.log("📸 Sending frame...");
//       const res = await axios.post("http://127.0.0.1:8000/video/frame-detect", { frame });
//       console.log("✅ Backend response:", res.data);
//       setMood(res.data.video_emotion);
//     } catch (err) {
//       console.error("❌ Frame send error:", err);
//     }
//   };

//   return videoRef;
// };



// import { useEffect, useRef } from "react";
// import axios from "axios";

// export const useWebcam = (setMood, interval = 3000) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const startCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//           console.log("🎥 Webcam started");
//         }
//       } catch (err) {
//         console.error("❌ Camera access error:", err);
//       }
//     };

//     startCamera();
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       captureAndSendFrame();
//     }, interval);

//     return () => clearInterval(timer);
//   }, [interval]);

//   const captureAndSendFrame = async () => {
//     if (!videoRef.current || videoRef.current.videoWidth === 0) {
//       console.warn("⚠️ Webcam not ready yet");
//       return;
//     }

//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");
//     canvas.width = videoRef.current.videoWidth;
//     canvas.height = videoRef.current.videoHeight;
//     ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//     const frame = canvas.toDataURL("image/jpeg");

//     try {
//       console.log("📸 Sending frame...");
//       const res = await axios.post("http://127.0.0.1:8000/video/frame-detect", { frame });
//       console.log("✅ Backend response:", res.data);
//       setMood(res.data.video_emotion);
//     } catch (err) {
//       console.error("❌ Frame send error:", err);
//     }
//   };

//   return videoRef;
// };






// import { useEffect, useRef } from "react";
// import axios from "axios";

// export const useWebcam = (setMood, interval = 3000) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     let timer;

//     const startCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;

//           // Wait until video metadata is ready
//           videoRef.current.onloadedmetadata = () => {
//             console.log("🎥 Webcam metadata loaded:", videoRef.current.videoWidth, "x", videoRef.current.videoHeight);

//             timer = setInterval(() => {
//               captureAndSendFrame();
//             }, interval);
//           };
//         }
//       } catch (err) {
//         console.error("❌ Camera access error:", err);
//       }
//     };

//     startCamera();

//     // Cleanup when component unmounts
//     return () => {
//       if (timer) clearInterval(timer);
//       if (videoRef.current?.srcObject) {
//         const tracks = videoRef.current.srcObject.getTracks();
//         tracks.forEach((track) => track.stop());
//       }
//     };
//   }, [interval]);

//   const captureAndSendFrame = async () => {
//     if (!videoRef.current || videoRef.current.videoWidth === 0) {
//       return; // skip quietly if video not ready
//     }

//     // Resize frame for efficiency (224x224 is good for ML)
//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");
//     canvas.width = 224;
//     canvas.height = 224;
//     ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//     const frame = canvas.toDataURL("image/jpeg");

//     try {
//       console.log("📸 Sending frame...");
//       const res = await axios.post("http://127.0.0.1:8000/video/frame-detect", { frame });
//       console.log("✅ Backend response:", res.data);
//       setMood(res.data.video_emotion);
//     } catch (err) {
//       console.error("❌ Frame send error:", err);
//     }
//   };

//   return videoRef;
// };






import { useEffect, useRef, useState } from "react";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
const FRAME_REQUEST_TIMEOUT_MS = 15000;
const BACKOFF_AFTER_FAILURES = 3;
const BACKOFF_DURATION_MS = 30000;

export const useWebcam = (onMoodUpdate, interval = 3000) => {
  const videoRef = useRef(null);
  const [needsManualStart, setNeedsManualStart] = useState(false);
  const streamRef = useRef(null); // ✅ keep stream alive across renders
  const failureCountRef = useRef(0);
  const backoffUntilRef = useRef(0);
  const hasLoggedBackoffRef = useRef(false);

  useEffect(() => {
    let timer;
    let fallbackTimer;

    const startCamera = async () => {
      try {
        streamRef.current = await navigator.mediaDevices.getUserMedia({ video: true });

        if (videoRef.current) {
          videoRef.current.srcObject = streamRef.current;
          videoRef.current.load();
          console.log("🎥 Stream attached:", videoRef.current.srcObject);

          videoRef.current.onloadedmetadata = async () => {
            try {
              await videoRef.current.play();
              console.log(
                "🎥 Webcam autoplay successful:",
                videoRef.current.videoWidth,
                "x",
                videoRef.current.videoHeight
              );

              // Check after 2s if still black
              fallbackTimer = setTimeout(() => {
                if (videoRef.current && videoRef.current.videoWidth === 0) {
                  console.warn("⚠️ Video not rendering → manual start required");
                  setNeedsManualStart(true);
                }
              }, 2000);

              // Start sending frames
              timer = setInterval(() => {
                captureAndSendFrame();
              }, interval);
            } catch (err) {
              console.error("⚠️ Autoplay blocked:", err);
              setNeedsManualStart(true);
            }
          };
        }
      } catch (err) {
        console.error("❌ Camera access error:", err);
      }
    };

    startCamera();

    // Cleanup
    return () => {
      if (timer) clearInterval(timer);
      if (fallbackTimer) clearTimeout(fallbackTimer);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [interval]);

  // ✅ Extra hook: keep re-attaching if srcObject gets lost
  useEffect(() => {
    const checkStream = setInterval(() => {
      if (videoRef.current && !videoRef.current.srcObject && streamRef.current) {
        console.warn("♻️ Re-attaching lost stream...");
        videoRef.current.srcObject = streamRef.current;
        videoRef.current.load();
        videoRef.current.play().catch(() => setNeedsManualStart(true));
      }
    }, 1000);

    return () => clearInterval(checkStream);
  }, []);

  const captureAndSendFrame = async () => {
    if (!videoRef.current || videoRef.current.videoWidth === 0) return;
    if (backoffUntilRef.current && Date.now() < backoffUntilRef.current) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 224;
    canvas.height = 224;
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const frame = canvas.toDataURL("image/jpeg");

    try {
      const res = await axios.post(`${API_BASE}/video/frame-detect`, { frame }, {
        timeout: FRAME_REQUEST_TIMEOUT_MS,
      });
      failureCountRef.current = 0;
      hasLoggedBackoffRef.current = false;
      const detectedMood = res.data.video_emotion;
      console.log("✅ Backend response:", detectedMood);

      if (detectedMood && typeof onMoodUpdate === "function") {
        onMoodUpdate(detectedMood);
      }
    } catch (err) {
      failureCountRef.current = (failureCountRef.current || 0) + 1;
      if (failureCountRef.current >= BACKOFF_AFTER_FAILURES) {
        backoffUntilRef.current = Date.now() + BACKOFF_DURATION_MS;
        if (!hasLoggedBackoffRef.current) {
          hasLoggedBackoffRef.current = true;
          console.warn(
            "⚠️ Backend unreachable at",
            API_BASE,
            "— is the emotion backend running? Start it with:\n  cd emotion_ui_backend && source .venv/bin/activate && uvicorn app.main:app --reload --port 8000"
          );
        }
      } else {
        console.error("❌ Frame send error:", err?.message || err);
      }
    }
  };

  const startManually = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.play();
        setNeedsManualStart(false);
        console.log("▶️ Manual start successful");
      } catch (err) {
        console.error("❌ Manual start failed:", err);
      }
    }
  };

  return { videoRef, needsManualStart, startManually };
};

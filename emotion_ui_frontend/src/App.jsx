// import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Webcam from "./components/Webcam";   // ✅ use correct component
// import MoodOverlay from "./components/MoodOverlay";
// import SentimentInput from "./components/SentimentInput";
// import MusicPlayer from "./components/MusicPlayer";
// import MoodHistoryChart from "./components/MoodHistoryChart";
// import { detectTextSentiment } from "./utils/api";
// import { useTheme } from "./hooks/useTheme";

// export default function App() {
//   const [mood, setMood] = useState("neutral");
//   const [history, setHistory] = useState([]);

//   // Apply dynamic theme
//   useTheme(mood);

//   // Keep mood history
//   useEffect(() => {
//     if (mood) {
//       setHistory((prev) => [
//         ...prev,
//         { time: new Date().toLocaleTimeString(), mood },
//       ]);
//     }
//   }, [mood]);

//   // Handle text sentiment analysis
//   const handleTextAnalyze = async (text) => {
//     const sentiment = await detectTextSentiment(text);
//     setMood(sentiment);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
//       <Navbar />

//       <div className="relative max-w-4xl mx-auto p-6 space-y-6">
//         {/* Live Camera Feed with Mood Overlay */}
//         <div className="relative">
//           <Webcam setMood={setMood} />
//           <MoodOverlay mood={mood} />
//         </div>

//         {/* Sentiment Input Box */}
//         <SentimentInput onAnalyze={handleTextAnalyze} />

//         {/* Music Player based on mood */}
//         <MusicPlayer mood={mood} />

//         {/* Mood History Chart */}
//         <div className="bg-white rounded-xl shadow-lg p-4">
//           <h2 className="text-lg font-semibold mb-2">Mood History</h2>
//           <MoodHistoryChart history={history} />
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Webcam from "./components/Webcam";
// import MoodOverlay from "./components/MoodOverlay";
// import SentimentInput from "./components/SentimentInput";
// import MusicPlayer from "./components/MusicPlayer";
// import MoodHistoryChart from "./components/MoodHistoryChart";
// import { detectTextSentiment } from "./utils/api";
// import { useTheme } from "./hooks/useTheme";

// export default function App() {
//   const [mood, setMood] = useState("neutral");
//   const [history, setHistory] = useState([]);

//   // Apply dynamic theme
//   useTheme(mood);

//   // Keep mood history
//   useEffect(() => {
//     if (mood) {
//       setHistory((prev) => [
//         ...prev,
//         { time: new Date().toLocaleTimeString(), mood },
//       ]);
//     }
//   }, [mood]);

//   // Handle text sentiment analysis
//   const handleTextAnalyze = async (text) => {
//     try {
//       const sentiment = await detectTextSentiment(text);
//       setMood(sentiment || "neutral"); // fallback
//     } catch (err) {
//       console.error("❌ Sentiment analysis failed:", err);
//       setMood("neutral");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
//       {/* Navbar */}
//       <Navbar />

//       <div className="relative max-w-5xl mx-auto p-6 space-y-8">
//         {/* Live Camera Feed with Mood Overlay */}
//         <div className="relative">
//           <Webcam setMood={setMood} mood={mood} />
//           <MoodOverlay mood={mood} />
//         </div>

//         {/* Sentiment Input Box */}
//         <SentimentInput onAnalyze={handleTextAnalyze} />

//         {/* Music Player */}
//         <MusicPlayer mood={mood} />

//         {/* Mood History Chart */}
//         <div className="bg-white rounded-xl shadow-lg p-4">
//           <h2 className="text-lg font-semibold mb-3">📈 Mood History</h2>
//           <MoodHistoryChart history={history} />
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import Navbar from "./components/Navbar";
import Webcam from "./components/Webcam";
import MoodOverlay from "./components/MoodOverlay";
import SentimentInput from "../src/components/SentimentInput";
import MusicPlayer from "./components/MusicPlayer";
import MoodHistoryChart from "./components/MoodHistoryChart";
import { detectTextSentiment } from "./utils/api";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const [mood, setMood] = useState("neutral");
  const [history, setHistory] = useState([]);

  // Apply dynamic theme
  useTheme(mood);

  // Mood update handler (always logs to history, even duplicates)
  const handleMoodUpdate = (newMood) => {
    setMood(newMood);
    setHistory((prev) => [
      ...prev,
      { time: new Date().toLocaleTimeString(), mood: newMood },
    ]);
  };

  // Handle text sentiment analysis
  const handleTextAnalyze = async (text) => {
  try {
    const { raw, mood } = await detectTextSentiment(text);
    handleMoodUpdate(mood); // for global state
    return { raw, mood };   // pass both to SentimentInput
  } catch (err) {
    console.error("❌ Sentiment analysis failed:", err);
    handleMoodUpdate("neutral");
    return { raw: "neutral", mood: "neutral" };
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Navbar />

      <div className="relative max-w-5xl mx-auto p-6 space-y-8">
        {/* Webcam Feed + Overlay */}
        <div className="relative">
          <Webcam setMood={handleMoodUpdate} mood={mood} />
          <MoodOverlay mood={mood} />
        </div>

        {/* Sentiment Input */}
        <SentimentInput onAnalyze={handleTextAnalyze} />

        {/* Music Player */}
        <MusicPlayer mood={mood} />

        {/* Mood History */}
        <div className="bg-white rounded-xl shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-3">📈 Mood History</h2>
          <MoodHistoryChart history={history} />
        </div>
      </div>
    </div>
  );
}

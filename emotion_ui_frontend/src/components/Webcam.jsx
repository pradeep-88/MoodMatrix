// import { useWebcam } from "../hooks/useWebcam";
// import { motion } from "framer-motion";

// const moodColors = {
//   happy: "from-yellow-200 via-yellow-400 to-yellow-600",
//   sad: "from-blue-200 via-blue-400 to-blue-600",
//   angry: "from-red-300 via-red-500 to-red-700",
//   neutral: "from-gray-300 via-gray-400 to-gray-600",
// };

// export default function Webcam({ setMood, mood }) {
//   const videoRef = useWebcam(setMood);
//   const currentMood = (mood || "neutral").toLowerCase();

//   return (
//     <div className="relative flex items-center justify-center">
//       {/* Glowing background ring */}
//       <div
//         className={`absolute -inset-4 rounded-3xl blur-2xl opacity-60 animate-pulse bg-gradient-to-br ${moodColors[currentMood]}`}
//       />

//       {/* Glassmorphism Card */}
//       <motion.div
//         key={currentMood}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className={`relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20`}
//       >
//         {/* Video Feed */}
//         <video
//           ref={videoRef}
//           autoPlay
//           playsInline
//           muted
//           className="relative w-full max-h-[450px] object-cover rounded-2xl shadow-lg"
//         />

//         {/* Mood Tag */}
//         <div className="absolute bottom-4 right-4 bg-white/70 px-3 py-1 rounded-lg text-sm font-semibold shadow-md backdrop-blur-sm">
//           {currentMood === "happy" && "😊 Happy"}
//           {currentMood === "sad" && "😢 Sad"}
//           {currentMood === "angry" && "😡 Angry"}
//           {currentMood === "neutral" && "😐 Neutral"}
//         </div>
//       </motion.div>
//     </div>
//   );
// }



// import { useWebcam } from "../hooks/useWebcam";
// import { motion } from "framer-motion";

// const moodColors = {
//   happy: "from-yellow-200 via-yellow-400 to-yellow-600",
//   sad: "from-blue-200 via-blue-400 to-blue-600",
//   angry: "from-red-300 via-red-500 to-red-700",
//   neutral: "from-gray-300 via-gray-400 to-gray-600",
// };

// export default function Webcam({ setMood, mood }) {
//   const videoRef = useWebcam(setMood);
//   const currentMood = (mood || "neutral").toLowerCase();

//   return (
//     <div className="relative flex items-center justify-center">
//       {/* Glowing background ring */}
//       <div
//         className={`absolute -inset-4 rounded-3xl blur-2xl opacity-60 animate-pulse bg-gradient-to-br ${moodColors[currentMood]}`}
//       />

//       {/* Glassmorphism Card */}
//       <motion.div
//         key={currentMood}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className={`relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20`}
//       >
//         {/* Video Feed */}
//         <video
//           ref={videoRef}
//           autoPlay
//           playsInline
//           muted
//           className="relative w-full max-h-[450px] object-cover rounded-2xl shadow-lg"
//         />

//         {/* Mood Tag */}
//         <div className="absolute bottom-4 right-4 bg-white/70 px-3 py-1 rounded-lg text-sm font-semibold shadow-md backdrop-blur-sm">
//           {currentMood === "happy" && "😊 Happy"}
//           {currentMood === "sad" && "😢 Sad"}
//           {currentMood === "angry" && "😡 Angry"}
//           {currentMood === "neutral" && "😐 Neutral"}
//         </div>
//       </motion.div>
//     </div>
//   );
// }




// import { useWebcam } from "../hooks/useWebcam";
// import { motion } from "framer-motion";

// const moodColors = {
//   happy: "from-yellow-200 via-yellow-400 to-yellow-600",
//   sad: "from-blue-200 via-blue-400 to-blue-600",
//   angry: "from-red-300 via-red-500 to-red-700",
//   neutral: "from-gray-300 via-gray-400 to-gray-600",
// };

// export default function Webcam({ setMood, mood }) {
//   const videoRef = useWebcam(setMood);
//   const currentMood = (mood || "neutral").toLowerCase();

//   return (
//     <div className="relative flex items-center justify-center">
//       {/* Glowing background ring */}
//       <div
//         className={`absolute -inset-4 rounded-3xl blur-2xl opacity-60 animate-pulse bg-gradient-to-br ${moodColors[currentMood]}`}
//       />

//       {/* Glassmorphism Card */}
//       <motion.div
//         key={currentMood}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 flex items-center justify-center"
//       >
//         {/* Video Feed */}
//         <video
//           ref={videoRef}
//           autoPlay
//           playsInline
//           muted
//           className="relative z-10 w-full max-h-[450px] object-cover rounded-2xl shadow-lg bg-black"
//         />

//         {/* Mood Tag */}
//         <div className="absolute bottom-4 right-4 bg-white/80 px-3 py-1 rounded-lg text-sm font-semibold shadow-md backdrop-blur-sm z-20">
//           {currentMood === "happy" && "😊 Happy"}
//           {currentMood === "sad" && "😢 Sad"}
//           {currentMood === "angry" && "😡 Angry"}
//           {currentMood === "neutral" && "😐 Neutral"}
//         </div>
//       </motion.div>
//     </div>
//   );
// }



import { useWebcam } from "../hooks/useWebcam";
import { motion } from "framer-motion";

const moodColors = {
  happy: "from-yellow-200 via-yellow-400 to-yellow-600",
  sad: "from-blue-200 via-blue-400 to-blue-600",
  angry: "from-red-300 via-red-500 to-red-700",
  neutral: "from-gray-300 via-gray-400 to-gray-600",
};

export default function Webcam({ setMood, mood }) {
  const { videoRef, needsManualStart, startManually } = useWebcam(setMood);
  const currentMood = (mood || "neutral").toLowerCase();

  return (
    <div className="relative flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl">
      
      {/* 🔹 Animated gradient background */}
      <motion.div
        key={currentMood}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`absolute inset-0 bg-gradient-to-br ${moodColors[currentMood]} animate-gradient`}
      />

      {/* 🔹 Glow border */}
      <div
        className={`absolute -inset-4 rounded-3xl blur-3xl opacity-40 bg-gradient-to-br ${moodColors[currentMood]}`}
      ></div>

      {/* 🔹 Video feed */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="relative z-10 w-full max-w-[640px] max-h-[480px] object-cover rounded-2xl shadow-lg"
      />

      {/* 🔹 Manual Start Fallback */}
      {needsManualStart && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-2xl z-20">
          <button
            onClick={startManually}
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-lg shadow-md transition"
          >
            ▶️ Start Camera
          </button>
        </div>
      )}

      {/* 🔹 Mood Tag */}
      <div className="absolute bottom-4 right-4 bg-white/80 px-3 py-1 rounded-lg text-sm font-semibold shadow-md backdrop-blur-sm z-30">
        {currentMood === "happy" && "😊 Happy"}
        {currentMood === "sad" && "😢 Sad"}
        {currentMood === "angry" && "😡 Angry"}
        {currentMood === "neutral" && "😐 Neutral"}
      </div>
    </div>
  );
}

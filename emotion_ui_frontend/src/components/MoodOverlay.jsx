// import { motion } from "framer-motion";

// const moodIcons = {
//   happy: "😄",
//   sad: "😢",
//   angry: "😡",
//   neutral: "😐",
// };

// const moodColors = {
//   happy: "bg-yellow-400",
//   sad: "bg-blue-400",
//   angry: "bg-red-500",
//   neutral: "bg-gray-500",
// };

// export default function MoodOverlay({ mood }) {
//   return (
//     <motion.div
//       key={mood}
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.4 }}
//       className={`absolute bottom-6 left-6 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 ${moodColors[mood]}`}
//     >
//       <span className="text-2xl">{moodIcons[mood] || "🎭"}</span>
//       <span className="capitalize font-semibold text-lg">{mood}</span>
//     </motion.div>
//   );
// }



import { motion } from "framer-motion";

const moodIcons = {
  happy: "😄",
  sad: "😢",
  angry: "😡",
  neutral: "😐",
};

const moodColors = {
  happy: "bg-yellow-400",
  sad: "bg-blue-400",
  angry: "bg-red-500",
  neutral: "bg-gray-500",
};

export default function MoodOverlay({ mood }) {
  return (
    <motion.div
      key={mood}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`absolute bottom-6 left-6 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 ${moodColors[mood]}`}
    >
      <span className="text-2xl">{moodIcons[mood] || "🎭"}</span>
      <span className="capitalize font-semibold text-lg">{mood}</span>
    </motion.div>
  );
}

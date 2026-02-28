import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const moodIcons = {
  happy: "😄",
  sad: "😢",
  angry: "😡",
  neutral: "😐",
};

export default function SentimentInput({ onAnalyze }) {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null); // mapped mood
  const [raw, setRaw] = useState(null); // raw backend response
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError(true);
      setTimeout(() => setError(false), 500);
      return;
    }

    // ✅ Call parent handler -> expects { raw, mood }
    const { raw, mood } = await onAnalyze(text);

    setResult(mood || "neutral");
    setRaw(raw || "neutral");
    setText("");
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
      {/* Input Form */}
      <motion.form
        onSubmit={handleSubmit}
        animate={error ? { x: [-5, 5, -5, 5, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="flex gap-3 bg-white rounded-xl shadow-md p-3"
      >
        <input
          className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="💬 Type something..."
        />
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition">
          Analyze
        </button>
      </motion.form>

      {/* Animated Result */}
      <AnimatePresence>
        {result && (
          <motion.div
            key={result + raw}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-5 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span className="text-2xl">{moodIcons[result]}</span>
              <span className="capitalize">{result}</span>
            </div>
            {raw && (
              <span className="text-sm opacity-80">
                (backend: {raw})
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

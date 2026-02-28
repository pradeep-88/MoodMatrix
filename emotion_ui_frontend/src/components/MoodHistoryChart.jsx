// import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

// export default function MoodHistoryChart({ history }) {
//   return (
//     <LineChart width={400} height={200} data={history}>
//       <XAxis dataKey="time" />
//       <YAxis />
//       <Tooltip />
//       <Line type="monotone" dataKey="mood" stroke="#8884d8" />
//     </LineChart>
//   );
// }



import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const moodMap = {
  happy: 3,
  neutral: 2,
  sad: 1,
  angry: 0,
};

const moodLabels = ["Angry", "Sad", "Neutral", "Happy"];
const COLORS = ["#facc15", "#3b82f6", "#ef4444", "#9ca3af"]; // yellow, blue, red, gray

export default function MoodHistoryChart({ history }) {
  // Transform history for line chart
  const chartData = history.map((h, i) => ({
    time: h.time,
    moodValue: moodMap[h.mood] ?? 2,
    moodLabel: h.mood,
    index: i + 1,
  }));

  // Count moods for pie chart
  const counts = history.reduce((acc, h) => {
    acc[h.mood] = (acc[h.mood] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(counts).map(([mood, value]) => ({
    name: mood,
    value,
  }));

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6 space-y-8">
      <h2 className="text-lg font-semibold mb-2">📊 Mood Analytics</h2>

      {/* Line Chart */}
      <div className="w-full h-64">
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="index"
              tick={{ fontSize: 12 }}
              label={{
                value: "Entries",
                position: "insideBottomRight",
                offset: -5,
              }}
            />
            <YAxis
              ticks={[0, 1, 2, 3]}
              tickFormatter={(val) => moodLabels[val]}
              label={{ value: "Mood", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              formatter={(val) => moodLabels[val]}
              labelFormatter={(label) => `Entry ${label}`}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="moodValue"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ r: 5, fill: "#6366f1" }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="w-full h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

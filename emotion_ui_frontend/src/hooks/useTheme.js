// import { useEffect } from "react";

// const themes = {
//   happy: "bg-yellow-100 text-yellow-900",
//   sad: "bg-blue-100 text-blue-900",
//   angry: "bg-red-100 text-red-900",
//   neutral: "bg-gray-100 text-gray-900",
// };

// export const useTheme = (mood) => {
//   useEffect(() => {
//     const body = document.body;
//     body.className = ""; // reset
//     if (themes[mood]) body.classList.add(...themes[mood].split(" "));
//   }, [mood]);
// };




import { useEffect } from "react";

const themes = {
  happy: "bg-yellow-100 text-yellow-900",
  sad: "bg-blue-100 text-blue-900",
  angry: "bg-red-100 text-red-900",
  neutral: "bg-gray-100 text-gray-900",
};

export const useTheme = (mood) => {
  useEffect(() => {
    const body = document.body;
    body.className = ""; // reset
    if (themes[mood]) body.classList.add(...themes[mood].split(" "));
  }, [mood]);
};

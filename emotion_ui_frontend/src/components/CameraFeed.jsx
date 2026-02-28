// // CameraFeed.jsx
// import { useEffect, useRef } from "react";

// export default function CameraFeed() {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia({ video: true })
//       .then(stream => { videoRef.current.srcObject = stream; })
//       .catch(err => console.error("Camera error:", err));
//   }, []);

//   return (
//     <video ref={videoRef} autoPlay className="rounded-xl shadow-lg w-full max-h-[400px]" />
//   );
// }



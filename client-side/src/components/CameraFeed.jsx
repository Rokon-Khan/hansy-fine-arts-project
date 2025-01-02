// import React, { useEffect, useRef } from "react";

// const CameraFeed = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const startCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//         });
//         videoRef.current.srcObject = stream;
//       } catch (err) {
//         console.error("Error accessing the camera: ", err);
//       }
//     };

//     startCamera();

//     return () => {
//       // Stop the camera on component unmount
//       if (videoRef.current && videoRef.current.srcObject) {
//         const tracks = videoRef.current.srcObject.getTracks();
//         tracks.forEach((track) => track.stop());
//       }
//     };
//   }, []);

//   return (
//     <div className="relative w-full h-full">
//       <video
//         ref={videoRef}
//         autoPlay
//         playsInline
//         muted
//         className="w-full h-full object-cover"
//       />
//     </div>
//   );
// };

// export default CameraFeed;

import React, { useEffect, useRef } from "react";

const CameraFeed = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((err) => {
        console.error("Error accessing camera:", err);
      });
  }, []);

  return (
    <video
      ref={videoRef}
      style={{ width: "100%", height: "auto", objectFit: "cover" }}
    />
  );
};

export default CameraFeed;

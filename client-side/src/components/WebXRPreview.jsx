// import { Canvas, useThree } from "@react-three/fiber";
// import { ARButton, XR } from "@react-three/xr";
// import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";

// const ARImage = ({ imageUrl }) => {
//   const { scene } = useThree();
//   const texture = useRef();

//   useEffect(() => {
//     const loader = new THREE.TextureLoader();
//     loader.load(imageUrl, (loadedTexture) => {
//       texture.current = loadedTexture;
//       const material = new THREE.MeshBasicMaterial({ map: loadedTexture });
//       const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
//       scene.add(plane);
//       plane.position.set(0, 0, -2); // Adjust position in AR space
//     });
//   }, [scene, imageUrl]);

//   return null;
// };

// const WebXRPreview = () => {
//   const [isARStarted, setIsARStarted] = useState(false);

//   const handleStartAR = () => {
//     setIsARStarted(true);
//   };

//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       {!isARStarted && (
//         <button
//           onClick={handleStartAR}
//           style={{
//             padding: "10px 20px",
//             fontSize: "18px",
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             zIndex: 10,
//           }}
//         >
//           Start AR Preview
//         </button>
//       )}

//       {isARStarted && (
//         <Canvas style={{ width: "100%", height: "100%" }}>
//           <XR>
//             <ARButton sessionInit={{ requiredFeatures: ["hit-test"] }} />
//             <ARImage imageUrl="/path-to-your-image.png" />
//           </XR>
//         </Canvas>
//       )}
//     </div>
//   );
// };

// export default WebXRPreview;

// import { Canvas } from "@react-three/fiber";
// import { ARButton, XR } from "@react-three/xr";
// import React, { useState } from "react";
// import * as THREE from "three";

// const ARImage = ({ imageUrl }) => {
//   return (
//     <mesh position={[0, 0, -2]}>
//       <planeBufferGeometry args={[1, 1]} />
//       <meshBasicMaterial map={new THREE.TextureLoader().load(imageUrl)} />
//     </mesh>
//   );
// };

// const WebXRPreview = () => {
//   const [isARStarted, setIsARStarted] = useState(false);

//   const handleStartAR = () => {
//     setIsARStarted(true);
//   };

//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       {!isARStarted && (
//         <button
//           onClick={handleStartAR}
//           style={{
//             padding: "10px 20px",
//             fontSize: "18px",
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             zIndex: 10,
//           }}
//         >
//           Start AR Preview
//         </button>
//       )}

//       {isARStarted && (
//         <Canvas
//           vr
//           style={{ width: "100%", height: "100%" }}
//           onCreated={({ gl }) => {
//             gl.xr.enabled = true; // Enable WebXR
//           }}
//         >
//           <XR>
//             <ARButton
//               sessionInit={{ requiredFeatures: ["local-floor", "hit-test"] }}
//             />
//             <ARImage imageUrl="/path-to-your-image.png" />
//           </XR>
//         </Canvas>
//       )}
//     </div>
//   );
// };

// export default WebXRPreview;

import { Canvas, useLoader } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import React, { useState } from "react";
import { TextureLoader } from "three";

const ARImage = ({ imageUrl }) => {
  const texture = useLoader(TextureLoader, imageUrl);

  return (
    <mesh position={[0, 0, -2]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const WebXRPreview = () => {
  const [isARStarted, setIsARStarted] = useState(false);

  const handleStartAR = () => {
    setIsARStarted(true);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {!isARStarted && (
        <button
          onClick={handleStartAR}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Live Preview
        </button>
      )}

      {isARStarted && (
        <Canvas
          style={{ width: "100%", height: "100%" }}
          onCreated={({ gl }) => {
            gl.xr.enabled = true; // Enable WebXR
          }}
        >
          <XR>
            <ARButton
              sessionInit={{ requiredFeatures: ["local-floor", "hit-test"] }}
            />
            <ARImage imageUrl="/path-to-your-image.png" />
          </XR>
        </Canvas>
      )}
    </div>
  );
};

export default WebXRPreview;

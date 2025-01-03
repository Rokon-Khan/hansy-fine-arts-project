// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import React, { useState } from "react";
// import { ChromePicker } from "react-color";

// const ArtPreview = ({image}) => {
//   const [backgroundColor, setBackgroundColor] = useState("#ffffff");
//   const [size, setSize] = useState({ width: 15, height: 12 });
//   const [image, setImage] = useState("/path/to/your/image.jpg"); // Replace with your image path

//   return (
//     <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
//       {/* Sidebar for controls */}
//       <div
//         style={{ width: "20%", padding: "10px", backgroundColor: "#f7f7f7" }}
//       >
//         <h2>Customize Preview</h2>
//         {/* Background Color Picker */}
//         <div style={{ marginBottom: "20px" }}>
//           <h4>Background Color:</h4>
//           <ChromePicker
//             color={backgroundColor}
//             onChange={(color) => setBackgroundColor(color.hex)}
//           />
//         </div>

//         {/* Size Dropdown */}
//         <div style={{ marginBottom: "20px" }}>
//           <h4>Select Size:</h4>
//           <select
//             onChange={(e) => {
//               const [width, height] = e.target.value.split("x").map(Number);
//               setSize({ width, height });
//             }}
//             style={{ padding: "5px", fontSize: "16px" }}
//           >
//             <option value="15x12">15 x 12</option>
//             <option value="20x16">20 x 16</option>
//             <option value="30x24">30 x 24</option>
//           </select>
//         </div>
//       </div>

//       {/* 3D Preview */}
//       <div
//         style={{
//           flex: 1,
//           backgroundColor,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Canvas>
//           {/* 3D Plane */}
//           <mesh>
//             <planeGeometry args={[size.width, size.height]} />
//             <meshStandardMaterial>
//               <texture attach="map" image={(new Image().src = image)} />
//             </meshStandardMaterial>
//           </mesh>

//           {/* Lighting */}
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} />

//           {/* Controls */}
//           <OrbitControls />
//         </Canvas>
//       </div>
//     </div>
//   );
// };

// export default ArtPreview;

// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import React, { useState } from "react";
// import { ChromePicker } from "react-color";

// const ArtPreview = ({ image }) => {
//   const [backgroundColor, setBackgroundColor] = useState("#ffffff");
//   const [size, setSize] = useState({ width: 15, height: 12 });
//   const [showPreview, setShowPreview] = useState(false);

//   return (
//     <div className="flex flex-row h-screen">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-100 p-4">
//         <h2 className="text-xl font-bold mb-4">Customize Preview</h2>
//         {/* Background Color Picker */}
//         <div className="mb-6">
//           <h4 className="font-semibold mb-2">Background Color:</h4>
//           <ChromePicker
//             color={backgroundColor}
//             onChange={(color) => setBackgroundColor(color.hex)}
//           />
//         </div>

//         {/* Size Dropdown */}
//         <div className="mb-6">
//           <h4 className="font-semibold mb-2">Select Size:</h4>
//           <select
//             className="w-full p-2 border border-gray-300 rounded"
//             onChange={(e) => {
//               const [width, height] = e.target.value.split("x").map(Number);
//               setSize({ width, height });
//             }}
//           >
//             <option value="15x12">15 x 12</option>
//             <option value="20x16">20 x 16</option>
//             <option value="30x24">30 x 24</option>
//           </select>
//         </div>

//         {/* Start Preview Button */}
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded shadow"
//           onClick={() => setShowPreview(true)}
//         >
//           Start Preview
//         </button>
//       </div>

//       {/* 3D Preview Area */}
//       <div
//         className={`flex-1 ${
//           showPreview ? "flex" : "hidden"
//         } justify-center items-center`}
//         style={{ backgroundColor }}
//       >
//         <Canvas>
//           {/* 3D Plane */}
//           <mesh>
//             <planeGeometry args={[size.width, size.height]} />
//             <meshStandardMaterial>
//               <texture attach="map" image={(new Image().src = { image })} />
//             </meshStandardMaterial>
//           </mesh>

//           {/* Lighting */}
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} />

//           {/* Controls */}
//           <OrbitControls />
//         </Canvas>
//       </div>
//     </div>
//   );
// };

// export default ArtPreview;

// import { OrbitControls } from "@react-three/drei";
// import { Canvas, useLoader } from "@react-three/fiber";
// import React, { useState } from "react";
// import { ChromePicker } from "react-color";
// import * as THREE from "three";

// const ArtPreview = ({ image }) => {
//   const [backgroundColor, setBackgroundColor] = useState("#ffffff");
//   const [size, setSize] = useState({ width: 15, height: 12 });
//   const [showPreview, setShowPreview] = useState(false);

//   // Custom component to load texture
//   const ImagePlane = () => {
//     const texture = useLoader(THREE.TextureLoader, image);
//     return (
//       <mesh>
//         <planeGeometry args={[size.width, size.height]} />
//         <meshStandardMaterial map={texture} />
//       </mesh>
//     );
//   };

//   return (
//     <div className="flex flex-row h-screen">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-100 p-4">
//         <h2 className="text-xl font-bold mb-4">Customize Preview</h2>
//         {/* Background Color Picker */}
//         <div className="mb-6">
//           <h4 className="font-semibold mb-2">Background Color:</h4>
//           <ChromePicker
//             color={backgroundColor}
//             onChange={(color) => setBackgroundColor(color.hex)}
//           />
//         </div>

//         {/* Size Dropdown */}
//         <div className="mb-6">
//           <h4 className="font-semibold mb-2">Select Size:</h4>
//           <select
//             className="w-full p-2 border border-gray-300 rounded"
//             onChange={(e) => {
//               const [width, height] = e.target.value.split("x").map(Number);
//               setSize({ width, height });
//             }}
//           >
//             <option value="15x12">15 x 12</option>
//             <option value="20x16">20 x 16</option>
//             <option value="30x24">30 x 24</option>
//           </select>
//         </div>

//         {/* Start Preview Button */}
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded shadow"
//           onClick={() => setShowPreview(true)}
//         >
//           Start Preview
//         </button>
//       </div>

//       {/* 3D Preview Area */}
//       <div
//         className={`flex-1 ${
//           showPreview ? "flex" : "hidden"
//         } justify-center items-center`}
//         style={{ backgroundColor }}
//       >
//         <Canvas>
//           {/* Add the 3D image plane */}
//           <ImagePlane />

//           {/* Lighting */}
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} />

//           {/* Controls */}
//           <OrbitControls />
//         </Canvas>
//       </div>
//     </div>
//   );
// };

// export default ArtPreview;

// import { OrbitControls } from "@react-three/drei";
// import { Canvas, useLoader } from "@react-three/fiber";
// import React, { useState } from "react";
// import { ChromePicker } from "react-color";
// import * as THREE from "three";

// const ArtPreview = ({ image }) => {
//   const [backgroundColor, setBackgroundColor] = useState("#f7f7f7");
//   const [size, setSize] = useState({ width: 15, height: 12 });
//   const [showPreview, setShowPreview] = useState(false);

//   // Custom component to load texture
//   const ImagePlane = () => {
//     const texture = useLoader(THREE.TextureLoader, image);
//     return (
//       <mesh>
//         <planeGeometry args={[size.width, size.height]} />
//         <meshBasicMaterial map={texture} toneMapped={false} />
//       </mesh>
//     );
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Sidebar */}
//       {!showPreview && (
//         <div className="w-1/4 bg-gray-200 p-4">
//           <h2 className="text-xl font-bold mb-4">Customize Preview</h2>

//           {/* Background Color Picker */}
//           <div className="mb-6">
//             <h4 className="font-semibold mb-2">Background Color:</h4>
//             <ChromePicker
//               color={backgroundColor}
//               onChange={(color) => setBackgroundColor(color.hex)}
//             />
//           </div>

//           {/* Size Dropdown */}
//           <div className="mb-6">
//             <h4 className="font-semibold mb-2">Select Size:</h4>
//             <select
//               className="w-full p-2 border border-gray-300 rounded"
//               onChange={(e) => {
//                 const [width, height] = e.target.value.split("x").map(Number);
//                 setSize({ width, height });
//               }}
//             >
//               <option value="15x12">15 x 12</option>
//               <option value="20x16">20 x 16</option>
//               <option value="30x24">30 x 24</option>
//             </select>
//           </div>
//         </div>
//       )}

//       {/* Toggle Preview Button */}
//       <button
//         className={`bg-blue-500 text-white px-4 py-2 rounded shadow m-4 ${
//           showPreview ? "self-end" : "self-start"
//         }`}
//         onClick={() => setShowPreview(!showPreview)}
//       >
//         {showPreview ? "Close Preview" : "Start Preview"}
//       </button>

//       {/* 3D Preview Area */}
//       {showPreview && (
//         <div
//           className="flex-1 flex justify-center items-center"
//           style={{ backgroundColor }}
//         >
//           <Canvas>
//             {/* Add the 3D image plane */}
//             <ImagePlane />

//             {/* Controls */}
//             <OrbitControls />
//           </Canvas>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ArtPreview;

import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { useState } from "react";
import { ChromePicker } from "react-color";
import * as THREE from "three";

const ArtPreview = ({ image }) => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [size, setSize] = useState({ width: 15, height: 12 });
  const [showPreview, setShowPreview] = useState(false);

  // Custom component to load texture
  const ImagePlane = () => {
    const texture = useLoader(THREE.TextureLoader, image);
    return (
      <mesh>
        <planeGeometry args={[size.width, size.height]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    );
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Sidebar */}
      {!showPreview && (
        <div className="w-1/4 bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-4">Customize Preview</h2>

          {/* Background Color Picker */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Background Color:</h4>
            <ChromePicker
              color={backgroundColor}
              onChange={(color) => setBackgroundColor(color.hex)}
            />
          </div>

          {/* Size Dropdown */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Select Size:</h4>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => {
                const [width, height] = e.target.value.split("x").map(Number);
                setSize({ width, height });
              }}
            >
              <option value="15x12">15 x 12</option>
              <option value="20x16">20 x 16</option>
              <option value="30x24">30 x 24</option>
            </select>
          </div>
        </div>
      )}

      {/* Toggle Preview Button */}
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded shadow m-4 ${
          showPreview ? "self-end" : "self-start"
        }`}
        onClick={() => setShowPreview(!showPreview)}
      >
        {showPreview ? "Close Preview" : "Start Preview"}
      </button>

      {/* 3D Preview Area */}
      {showPreview && (
        <div
          className="flex-1 flex justify-center items-center relative"
          style={{ backgroundColor }}
        >
          <Canvas>
            {/* Add the 3D image plane */}
            <ImagePlane />

            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            {/* Controls */}
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </Canvas>
        </div>
      )}
    </div>
  );
};

export default ArtPreview;

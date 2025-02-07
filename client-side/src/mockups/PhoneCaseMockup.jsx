// import { useState } from "react";
// import phoneMask from "/Iphone_16_Snap_Mask.png";

// const PhoneCaseMockup = ({ image }) => {
//   //   const [image, setImage] = useState("");
//   const [rotation, setRotation] = useState(0);
//   const [phoneModel, setPhoneModel] = useState("iPhone 16 Pro");
//   const [caseStyle, setCaseStyle] = useState("Premium Glossy Snap Case");

//   return (
//     <div className="flex flex-col items-center p-5">
//       {/* Mockup Preview */}
//       <div className="relative w-[300px] h-[600px]">
//         <img
//           src={phoneMask}
//           className="absolute w-full h-full"
//           alt="Phone Case"
//         />
//         <img
//           src={image}
//           className="absolute w-[200px] h-[400px] top-[100px] left-[50px]"
//           style={{ transform: `rotate(${rotation}deg)` }}
//           alt="Custom Design"
//         />
//       </div>

//       {/* Dropdowns */}
//       <div className="mt-4 space-y-2">
//         <select
//           className="p-2 border"
//           onChange={(e) => setPhoneModel(e.target.value)}
//         >
//           <option>iPhone 16 Pro</option>
//           <option>iPhone 16 Pro Max</option>
//         </select>

//         <select
//           className="p-2 border"
//           onChange={(e) => setCaseStyle(e.target.value)}
//         >
//           <option>Premium Glossy Snap Case</option>
//           <option>Premium Glossy Tough Case</option>
//         </select>

//         <select
//           className="p-2 border"
//           onChange={(e) => setRotation(e.target.value)}
//         >
//           <option value="0">0°</option>
//           <option value="90">90°</option>
//           <option value="180">180°</option>
//           <option value="270">270°</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default PhoneCaseMockup;

// import { useState } from "react";
// import overlayMask from "/Iphone_16_Overlay.png"; // Overlay Image
// import phoneMask from "/Iphone_16_Snap_Mask.png";

// const PhoneCaseMockup = ({ image }) => {
//   const [imageSize, setImageSize] = useState(100);
//   const [rotation, setRotation] = useState(0);
//   const [phoneModel, setPhoneModel] = useState("iPhone 16");
//   const [caseStyle, setCaseStyle] = useState("Premium Glossy Snap Case");

//   return (
//     <div className="flex flex-col items-center p-5">
//       {/* Mockup Preview */}
//       <div className="relative w-[300px] h-[600px]">
//         {/* Phone Case Mask */}
//         <img
//           src={phoneMask}
//           className="absolute w-full h-full"
//           alt="Phone Case"
//         />

//         {/* Custom Design Image */}
//         <img
//           src={image}
//           className="absolute w-full h-full top-[10px] left-[10px]"
//           style={{ transform: `rotate(${rotation}deg)` }}
//           alt="Custom Design"
//         />

//         {/* Overlay Mask */}
//         <img
//           src={overlayMask}
//           className="absolute w-full h-full"
//           alt="Overlay"
//         />
//       </div>

//       {/* Controls Section */}
//       <div className="mt-4 space-y-2 w-full px-5">
//         {/* Image Size Control */}
//         <div>
//           <label className="block text-sm">Image Size</label>
//           <input
//             type="range"
//             min="50"
//             max="100"
//             value={imageSize}
//             onChange={(e) => setImageSize(e.target.value)}
//             className="w-full"
//           />
//         </div>

//         {/* Rotation Control */}
//         <label className="block">Rotate</label>
//         <input
//           type="range"
//           min="0"
//           max="360"
//           value={rotation}
//           className="w-full"
//           onChange={(e) => setRotation(e.target.value)}
//         />

//         {/* Phone Model Dropdown */}
//         <label className="block">Phone Model for Case</label>
//         <select
//           className="p-2 border w-full"
//           onChange={(e) => setPhoneModel(e.target.value)}
//         >
//           <option>iPhone 16</option>
//           <option>iPhone 16 Pro</option>
//           <option>iPhone 16 Plus</option>
//           <option>iPhone 16 Pro Max</option>
//           <option>iPhone 15 Pro</option>
//           <option>iPhone 15 Pro Max</option>
//           <option>iPhone 15 Plus</option>
//           <option>iPhone 15</option>
//           <option>iPhone 14 Pro</option>
//           <option>iPhone 14 Pro Max</option>
//           <option>iPhone 14 Plus</option>
//           <option>iPhone 14</option>
//           <option>Samsung Galaxy S24</option>
//           <option>Samsung Galaxy S23</option>
//           <option>Samsung Galaxy S22</option>
//         </select>

//         {/* Case Style Dropdown */}
//         <label className="block">Case Style</label>
//         <select
//           className="p-2 border w-full"
//           onChange={(e) => setCaseStyle(e.target.value)}
//         >
//           <option>Premium Glossy Snap Case</option>
//           <option>Premium Glossy Tough Case</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default PhoneCaseMockup;

// import { useState } from "react";

// // Phone case masks based on phone model
// const phoneCaseImages = {
//   "iPhone 16": "/Iphone_16_Snap_Mask.png",
//   "iPhone 16 Pro": "/Iphone_16_Pro_Snap_Mask.png",
//   "iPhone 16 Plus": "/Iphone_16_Plus_Snap_Mask.png",
// };

// // Overlay images based on phone model
// const overlayImages = {
//   "iPhone 16": "/Iphone_16_Overlay.png",
//   "iPhone 16 Pro": "/Iphone_16_Pro_Overlay.png",
//   "iPhone 16 Plus": "/Iphone_16_Plus_Overlay.png",
// };

// const PhoneCaseMockup = ({ image }) => {
//   const [showMockup, setShowMockup] = useState(false);
//   const [imageSize, setImageSize] = useState(100);
//   const [rotation, setRotation] = useState(0);
//   const [phoneModel, setPhoneModel] = useState("iPhone 16");
//   const [caseStyle, setCaseStyle] = useState("Premium Glossy Snap Case");

//   return (
//     <div className="flex flex-col items-center p-5">
//       {/* Show Button */}
//       <button
//         className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
//         onClick={() => setShowMockup(true)}
//       >
//         Show Phone Case
//       </button>

//       {/* Mockup Preview (Visible only when button is clicked) */}
//       {showMockup && (
//         <div className="relative w-[300px] h-[600px]">
//           {/* Phone Case Mask */}
//           <img
//             src={phoneCaseImages[phoneModel]}
//             className="absolute w-full h-full"
//             alt="Phone Case"
//           />

//           {/* Custom Design Image */}
//           <img
//             src={image}
//             className="absolute top-[50px] left-[50px]"
//             style={{
//               width: `${imageSize}%`,
//               height: `${imageSize}%`,
//               transform: `rotate(${rotation}deg)`,
//             }}
//             alt="Custom Design"
//           />

//           {/* Overlay Mask */}
//           <img
//             src={overlayImages[phoneModel]}
//             className="absolute w-full h-full"
//             alt="Overlay"
//           />
//         </div>
//       )}

//       {/* Controls Section */}
//       <div className="mt-4 space-y-2 w-full px-5">
//         {/* Image Size Control */}
//         <div>
//           <label className="block text-sm">Image Size</label>
//           <input
//             type="range"
//             min="50"
//             max="100"
//             value={imageSize}
//             onChange={(e) => setImageSize(e.target.value)}
//             className="w-full"
//           />
//         </div>

//         {/* Rotation Control */}
//         <label className="block">Rotate</label>
//         <input
//           type="range"
//           min="0"
//           max="360"
//           value={rotation}
//           className="w-full"
//           onChange={(e) => setRotation(e.target.value)}
//         />

//         {/* Phone Model Dropdown */}
//         <label className="block">Phone Model for Case</label>
//         <select
//           className="p-2 border w-full"
//           value={phoneModel}
//           onChange={(e) => setPhoneModel(e.target.value)}
//         >
//           {Object.keys(phoneCaseImages).map((model) => (
//             <option key={model} value={model}>
//               {model}
//             </option>
//           ))}
//         </select>

//         {/* Case Style Dropdown */}
//         <label className="block">Case Style</label>
//         <select
//           className="p-2 border w-full"
//           value={caseStyle}
//           onChange={(e) => setCaseStyle(e.target.value)}
//         >
//           <option>Premium Glossy Snap Case</option>
//           <option>Premium Glossy Tough Case</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default PhoneCaseMockup;

// import { useState } from "react";

// // Phone case masks & overlays mapping
// const phoneCaseData = {
//   "iPhone 16": {
//     case: "/Iphone_16_Snap_Mask.png",
//     overlay: "/Iphone_16_Overlay.png",
//   },
//   "iPhone 16 Pro": {
//     case: "/Iphone_16_Pro_Snap_Mask.png",
//     overlay: "/Iphone_16_Pro_Overlay.png",
//   },
//   "iPhone 16 Plus": {
//     case: "/Iphone_16_Plus_Snap_Mask.png",
//     overlay: "/Iphone_16_Plus_Overlay.png",
//   },
// };

// const PhoneCaseMockup = ({ image }) => {
//   const [showMockup, setShowMockup] = useState(false);
//   const [imageSize, setImageSize] = useState(100);
//   const [rotation, setRotation] = useState(0);
//   const [phoneModel, setPhoneModel] = useState("iPhone 16");
//   const [caseStyle, setCaseStyle] = useState("Premium Glossy Snap Case");

//   return (
//     <div className="flex flex-col items-center p-5">
//       {/* Show Button */}
//       <button
//         className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
//         onClick={() => setShowMockup(true)}
//       >
//         Show Phone Case
//       </button>

//       {/* Mockup Preview (Visible only when button is clicked) */}
//       {showMockup && (
//         <div
//           className="relative"
//           style={{ width: `${imageSize * 3}px`, height: `${imageSize * 6}px` }}
//         >
//           {/* Phone Case Mask */}
//           <img
//             src={phoneCaseData[phoneModel].case}
//             className="absolute w-full h-full"
//             alt="Phone Case"
//           />

//           {/* Custom Design Image (Inside the overlay area) */}
//           <img
//             src={image}
//             className="absolute"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               clipPath: "inset(0 0 0 0)", // Ensures it doesn't go outside
//               transform: `rotate(${rotation}deg)`,
//             }}
//             alt="Custom Design"
//           />

//           {/* Overlay Mask */}
//           <img
//             src={phoneCaseData[phoneModel].overlay}
//             className="absolute w-full h-full"
//             alt="Overlay"
//           />
//         </div>
//       )}

//       {/* Controls Section */}
//       <div className="mt-4 space-y-2 w-full px-5">
//         {/* Image & Phone Case Size Control */}
//         <div>
//           <label className="block text-sm">Size</label>
//           <input
//             type="range"
//             min="50"
//             max="150"
//             value={imageSize}
//             onChange={(e) => setImageSize(e.target.value)}
//             className="w-full"
//           />
//         </div>

//         {/* Rotation Control */}
//         <label className="block">Rotate</label>
//         <input
//           type="range"
//           min="0"
//           max="360"
//           value={rotation}
//           className="w-full"
//           onChange={(e) => setRotation(e.target.value)}
//         />

//         {/* Phone Model Dropdown */}
//         <label className="block">Phone Model for Case</label>
//         <select
//           className="p-2 border w-full"
//           value={phoneModel}
//           onChange={(e) => setPhoneModel(e.target.value)}
//         >
//           {Object.keys(phoneCaseData).map((model) => (
//             <option key={model} value={model}>
//               {model}
//             </option>
//           ))}
//         </select>

//         {/* Case Style Dropdown */}
//         <label className="block">Case Style</label>
//         <select
//           className="p-2 border w-full"
//           value={caseStyle}
//           onChange={(e) => setCaseStyle(e.target.value)}
//         >
//           <option>Premium Glossy Snap Case</option>
//           <option>Premium Glossy Tough Case</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default PhoneCaseMockup;

// import { useState } from "react";

// // Phone case masks & overlays mapping
// const phoneCaseData = {
//   "iPhone 16": {
//     case: "/Iphone_16_Snap_Mask.png",
//     overlay: "/Iphone_16_Overlay.png",
//   },
//   "iPhone 16 Pro": {
//     case: "/Iphone_16_Pro_Snap_Mask.png",
//     overlay: "/Iphone_16_Pro_Overlay.png",
//   },
//   "iPhone 16 Plus": {
//     case: "/Iphone_16_Plus_Snap_Mask.png",
//     overlay: "/Iphone_16_Plus_Overlay.png",
//   },
// };

// const PhoneCaseMockup = ({ image }) => {
//   const [showMockup, setShowMockup] = useState(false);
//   const [imageSize, setImageSize] = useState(100);
//   const [rotation, setRotation] = useState(0);
//   const [phoneModel, setPhoneModel] = useState("iPhone 16");
//   const [caseStyle, setCaseStyle] = useState("Premium Glossy Snap Case");

//   return (
//     <div className="flex flex-col items-center p-5">
//       {/* Show Button */}
//       <button
//         className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
//         onClick={() => setShowMockup(true)}
//       >
//         Show Phone Case
//       </button>

//       {/* Mockup Preview (Visible only when button is clicked) */}
//       {showMockup && (
//         <div className="relative w-[300px] h-[600px]">
//           {/* Phone Case Mask */}
//           <img
//             src={phoneCaseData[phoneModel].case}
//             className="absolute w-full h-full"
//             alt="Phone Case"
//           />

//           {/* Custom Design Image (Clipped Inside the Phone Case) */}
//           <div className="absolute w-full h-full overflow-hidden">
//             <img
//               src={image}
//               className="absolute w-full h-full object-cover"
//               style={{
//                 transform: `rotate(${rotation}deg) scale(${imageSize / 100})`,
//               }}
//               alt="Custom Design"
//             />
//           </div>

//           {/* Overlay Mask */}
//           <img
//             src={phoneCaseData[phoneModel].overlay}
//             className="absolute w-full h-full"
//             alt="Overlay"
//           />
//         </div>
//       )}

//       {/* Controls Section */}
//       <div className="mt-4 space-y-2 w-full px-5">
//         {/* Image & Phone Case Size Control */}
//         <div>
//           <label className="block text-sm">Size</label>
//           <input
//             type="range"
//             min="50"
//             max="150"
//             value={imageSize}
//             onChange={(e) => setImageSize(e.target.value)}
//             className="w-full"
//           />
//         </div>

//         {/* Rotation Control */}
//         <label className="block">Rotate</label>
//         <input
//           type="range"
//           min="0"
//           max="360"
//           value={rotation}
//           className="w-full"
//           onChange={(e) => setRotation(e.target.value)}
//         />

//         {/* Phone Model Dropdown */}
//         <label className="block">Phone Model for Case</label>
//         <select
//           className="p-2 border w-full"
//           value={phoneModel}
//           onChange={(e) => setPhoneModel(e.target.value)}
//         >
//           {Object.keys(phoneCaseData).map((model) => (
//             <option key={model} value={model}>
//               {model}
//             </option>
//           ))}
//         </select>

//         {/* Case Style Dropdown */}
//         <label className="block">Case Style</label>
//         <select
//           className="p-2 border w-full"
//           value={caseStyle}
//           onChange={(e) => setCaseStyle(e.target.value)}
//         >
//           <option>Premium Glossy Snap Case</option>
//           <option>Premium Glossy Tough Case</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default PhoneCaseMockup;

import { useState } from "react";

// Phone case assets mapping
const phoneCaseData = {
  "iPhone 16": {
    case: "/Iphone_16_Snap_Mask.png",
    overlay: "/Iphone_16_Overlay.png",
  },
  "iPhone 16 Plus": {
    case: "/Iphone_16_Snap_Mask.png",
    overlay: "/Iphone_16_Plus_Snap_Overlay.png",
  },
  "iPhone 16 Pro": {
    case: "/Iphone_16_Snap_Mask.png",
    overlay: "/Iphone_16_Pro_Snap_Overlay.png",
  },
  "iPhone 16 Pro Max": {
    case: "/Iphone_16_Snap_Mask.png",
    overlay: "/Iphone_16_Pro_Max_Snap_Overlay.png",
  },
  "iPhone 15": {
    case: "/iPhone_15_Pro_Snap_Mask.png",
    overlay: "/iPhone_15_Snap_Overlay.png",
  },
  "iPhone 15 Plus": {
    case: "/iPhone_15_Pro_Snap_Mask.png",
    overlay: "/iPhone_15_Plus_Snap_Overlay.png",
  },
  "iPhone 15 Pro": {
    case: "/iPhone_15_Pro_Snap_Mask.png",
    overlay: "/iPhone_15_Pro_Snap_Overlay.png",
  },
  "iPhone 15 Pro Max": {
    case: "/iPhone_15_Pro_Snap_Mask.png",
    overlay: "/iPhone_15_Pro_Max_Snap_Overlay.png",
  },
  "iPhone 14": {
    case: "/iPhone_14_Pro_Snap_Mask.png",
    overlay: "/iPhone_14_Snap_Overlay.png",
  },
  "iPhone 14 Plus": {
    case: "/iPhone_14_Pro_Snap_Mask.png",
    overlay: "/iPhone_14_Plus_Snap_Overlay.png",
  },
  "iPhone 14 Pro": {
    case: "/iPhone_14_Pro_Snap_Mask.png",
    overlay: "/iPhone_14_Pro_Snap_Overlay.png",
  },
  "iPhone 14 Pro Max": {
    case: "/iPhone_14_Pro_Snap_Mask.png",
    overlay: "/iPhone_14_Pro_Max_Snap_Overlay.png",
  },
};

const PhoneCaseMockup = ({ image }) => {
  const [showMockup, setShowMockup] = useState(false);
  const [imageSize, setImageSize] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [phoneModel, setPhoneModel] = useState("iPhone 16");

  return (
    <div className="flex flex-col items-center p-5">
      {/* Show Button */}
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setShowMockup(true)}
      >
        Show Phone Case
      </button>

      {/* Mockup Preview (Visible only when button is clicked) */}
      {showMockup && (
        <div className="relative w-[300px] h-[600px] overflow-hidden">
          {/* Custom Design Image (Wrapped to Case) */}
          <img
            src={image}
            className="absolute w-full h-full object-cover"
            style={{
              transform: `rotate(${rotation}deg) scale(${imageSize / 100})`,
            }}
            alt="Custom Design"
          />

          {/* Phone Case Mask */}
          <img
            src={phoneCaseData[phoneModel].case}
            className="absolute w-full h-full"
            alt="Phone Case"
          />

          {/* Overlay Mask */}
          <img
            src={phoneCaseData[phoneModel].overlay}
            className="absolute w-full h-full"
            alt="Overlay"
          />
        </div>
      )}

      {/* Controls Section */}
      <div className="mt-4 space-y-2 w-full px-5">
        {/* Image & Phone Case Size Control */}
        <div>
          <label className="block text-sm">Size</label>
          <input
            type="range"
            min="50"
            max="150"
            value={imageSize}
            onChange={(e) => setImageSize(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Rotation Control */}
        <label className="block">Rotate</label>
        <input
          type="range"
          min="0"
          max="360"
          value={rotation}
          className="w-full"
          onChange={(e) => setRotation(e.target.value)}
        />

        {/* Phone Model Dropdown */}
        <label className="block">Phone Model for Case</label>
        <select
          className="p-2 border w-full"
          value={phoneModel}
          onChange={(e) => setPhoneModel(e.target.value)}
        >
          {Object.keys(phoneCaseData).map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PhoneCaseMockup;

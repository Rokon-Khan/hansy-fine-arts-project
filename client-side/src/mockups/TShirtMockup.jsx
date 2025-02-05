// import { useState } from "react";

// const TShirtMockup = () => {
//   const [imageSize, setImageSize] = useState(100);
//   const [rotation, setRotation] = useState(0);
//   const [brand, setBrand] = useState("Bella + Canvas");
//   const [printPlacement, setPrintPlacement] = useState("Center Front");
//   const [size, setSize] = useState("XS");
//   const [color, setColor] = useState("Orange");

//   return (
//     <div className="flex flex-col md:flex-row gap-8 p-6">
//       {/* T-Shirt Display */}
//       <div
//         className="relative w-80 h-96 bg-gray-200 flex items-center justify-center"
//         style={{ backgroundColor: color.toLowerCase() }}
//       >
//         <img
//           src="/path-to-existing-image.png"
//           alt="T-Shirt Design"
//           className="absolute"
//           style={{
//             width: `${imageSize}%`,
//             transform: `rotate(${rotation}deg)`,
//           }}
//         />
//       </div>

//       {/* Customization Options */}
//       <div className="w-80 space-y-4">
//         <h2 className="text-lg font-semibold">Customize It</h2>

//         {/* Image Size */}
//         <div>
//           <label className="block text-sm">Image Size</label>
//           <input
//             type="range"
//             min="50"
//             max="150"
//             value={imageSize}
//             onChange={(e) => setImageSize(e.target.value)}
//             className="w-full"
//           />
//         </div>

//         {/* Rotate */}
//         <div>
//           <label className="block text-sm">Rotate</label>
//           <input
//             type="range"
//             min="0"
//             max="360"
//             step="10"
//             value={rotation}
//             onChange={(e) => setRotation(e.target.value)}
//             className="w-full"
//           />
//         </div>

//         {/* Brand Selection */}
//         <div>
//           <label className="block text-sm">Brand</label>
//           <select
//             className="w-full p-2 border rounded"
//             value={brand}
//             onChange={(e) => setBrand(e.target.value)}
//           >
//             <option>Bella + Canvas</option>
//             <option>Gildan</option>
//             <option>Hanes</option>
//           </select>
//         </div>

//         {/* Print Placement */}
//         <div>
//           <label className="block text-sm">Print Placement</label>
//           <select
//             className="w-full p-2 border rounded"
//             value={printPlacement}
//             onChange={(e) => setPrintPlacement(e.target.value)}
//           >
//             <option>Center Front</option>
//             <option>Center Back</option>
//           </select>
//         </div>

//         {/* Size Selection */}
//         <div>
//           <label className="block text-sm">Size</label>
//           <select
//             className="w-full p-2 border rounded"
//             value={size}
//             onChange={(e) => setSize(e.target.value)}
//           >
//             <option>XS</option>
//             <option>S</option>
//             <option>M</option>
//             <option>L</option>
//             <option>XL</option>
//             <option>2XL</option>
//             <option>3XL</option>
//           </select>
//         </div>

//         {/* Color Selection */}
//         <div>
//           <label className="block text-sm">Color</label>
//           <select
//             className="w-full p-2 border rounded"
//             value={color}
//             onChange={(e) => setColor(e.target.value)}
//           >
//             <option>Orange</option>
//             <option>Army</option>
//             <option>Yellow</option>
//             <option>Blue</option>
//             <option>Black</option>
//             <option>Ash</option>
//             <option>Baby Blue</option>
//             <option>Brown</option>
//             <option>Pink</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TShirtMockup;

// import { useState } from "react";

// const TShirtMockup = ({ image }) => {
//   const [imageSize, setImageSize] = useState(100);
//   const [rotation, setRotation] = useState(0);
//   const [brand, setBrand] = useState("Bella + Canvas");
//   const [printPlacement, setPrintPlacement] = useState("Center Front");
//   const [size, setSize] = useState("XS");
//   const [color, setColor] = useState("Orange");
//   const [selectedCategory, setSelectedCategory] = useState(
//     "Watercolor Fine Art Paper"
//   );

//   return (
//     <div className="flex flex-col md:flex-row gap-8 p-6">
//       {/* Category Selection */}
//       <div className="w-80 space-y-4">
//         <h2 className="text-lg font-semibold">Select Product</h2>
//         <div className="grid grid-cols-3 gap-2">
//           {[
//             "Watercolor Fine Art Paper",
//             "Canvas",
//             "Metal - White Gloss",
//             "Wood",
//             '1/4" Acrylic',
//             "Hoodies",
//             "T-Shirts",
//             "Tank Tops",
//             "Tote Bags",
//             "Throw Pillows",
//             "Phone Cases",
//             "Mugs",
//             "Puzzles",
//             "Porcelain Ornaments",
//             "Metal Ornaments",
//           ].map((category) => (
//             <button
//               key={category}
//               className={`p-2 border rounded ${
//                 selectedCategory === category
//                   ? "border-red-500"
//                   : "border-gray-300"
//               }`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* T-Shirt Display */}
//       {selectedCategory === "T-Shirts" && (
//         <div
//           className="relative w-80 h-96 bg-gray-200 flex items-center justify-center"
//           style={{
//             backgroundImage: 'url("/BellaCanvas_Front_Army-New.png")',
//             backgroundPosition: "center",
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <img
//             src={image}
//             alt="T-Shirt Design"
//             className="absolute"
//             style={{
//               width: `${imageSize}%`,
//               transform: `rotate(${rotation}deg)`,
//             }}
//           />
//         </div>
//       )}

//       {/* Customization Options */}
//       {selectedCategory === "T-Shirts" && (
//         <div className="w-80 space-y-4">
//           <h2 className="text-lg font-semibold">Customize It</h2>

//           {/* Image Size */}
//           <div>
//             <label className="block text-sm">Image Size</label>
//             <input
//               type="range"
//               min="50"
//               max="150"
//               value={imageSize}
//               onChange={(e) => setImageSize(e.target.value)}
//               className="w-full"
//             />
//           </div>

//           {/* Rotate */}
//           <div>
//             <label className="block text-sm">Rotate</label>
//             <input
//               type="range"
//               min="0"
//               max="360"
//               step="10"
//               value={rotation}
//               onChange={(e) => setRotation(e.target.value)}
//               className="w-full"
//             />
//           </div>

//           {/* Brand Selection */}
//           <div>
//             <label className="block text-sm">Brand</label>
//             <select
//               className="w-full p-2 border rounded"
//               value={brand}
//               onChange={(e) => setBrand(e.target.value)}
//             >
//               <option>Bella + Canvas</option>
//               <option>Gildan</option>
//               <option>Hanes</option>
//             </select>
//           </div>

//           {/* Print Placement */}
//           <div>
//             <label className="block text-sm">Print Placement</label>
//             <select
//               className="w-full p-2 border rounded"
//               value={printPlacement}
//               onChange={(e) => setPrintPlacement(e.target.value)}
//             >
//               <option>Center Front</option>
//               <option>Center Back</option>
//             </select>
//           </div>

//           {/* Size Selection */}
//           <div>
//             <label className="block text-sm">Size</label>
//             <select
//               className="w-full p-2 border rounded"
//               value={size}
//               onChange={(e) => setSize(e.target.value)}
//             >
//               <option>XS</option>
//               <option>S</option>
//               <option>M</option>
//               <option>L</option>
//               <option>XL</option>
//               <option>2XL</option>
//               <option>3XL</option>
//             </select>
//           </div>

//           {/* Color Selection */}
//           <div>
//             <label className="block text-sm">Color</label>
//             <select
//               className="w-full p-2 border rounded"
//               value={color}
//               onChange={(e) => setColor(e.target.value)}
//             >
//               <option>Orange</option>
//               <option>Army</option>
//               <option>Yellow</option>
//               <option>Blue</option>
//               <option>Black</option>
//               <option>Ash</option>
//               <option>Baby Blue</option>
//               <option>Brown</option>
//               <option>Pink</option>
//             </select>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TShirtMockup;

// import { useState } from "react";

// const TShirtMockup = ({ image }) => {
//   const [imageSize, setImageSize] = useState(100);
//   const [rotation, setRotation] = useState(0);
//   const [printPlacement, setPrintPlacement] = useState("Center Front");
//   const [size, setSize] = useState("XS");
//   const [color, setColor] = useState("black");

//   const [selectedCategory, setSelectedCategory] = useState(
//     "Watercolor Fine Art Paper"
//   );

//   // Background color mapping for the T-Shirt
//   const colorMap = {
//     black: "#454545",
//     army: "#4B5320",
//     yellow: "#FFD700",
//     orange: "#FFA500",
//   };

//   const sizeMap = {
//     XS: 80, // Smaller
//     S: 90,
//     M: 100, // Default
//     L: 110,
//     XL: 120,
//     "2XL": 130,
//     "3XL": 140, // Largest
//   };

// //   // Overlay mask images
//   const tshirtImages = {
//     "Center Front": "/Bella_Canvas_Front_Overlay_mask.png",
//     "Center Back": "/Bella_Canvas_Back_Overlay_mask.png",
//   };

//   return (
//     <div className="flex flex-col md:flex-row gap-8 p-6">
//       {/* Category Selection */}
//       <div className="w-80 space-y-4">
//         <h2 className="text-lg font-semibold">Select Product</h2>
//         <div className="grid grid-cols-3 gap-2">
//           {[
//             "Watercolor Fine Art Paper",
//             "Canvas",
//             "Metal - White Gloss",
//             "Wood",
//             '1/4" Acrylic',
//             "Hoodies",
//             "T-Shirts",
//             "Tank Tops",
//             "Tote Bags",
//             "Throw Pillows",
//             "Phone Cases",
//             "Mugs",
//             "Puzzles",
//             "Porcelain Ornaments",
//             "Metal Ornaments",
//           ].map((category) => (
//             <button
//               key={category}
//               className={`p-2 border rounded ${
//                 selectedCategory === category
//                   ? "border-red-500"
//                   : "border-gray-300"
//               }`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* T-Shirt Display */}
//       {selectedCategory === "T-Shirts" && (
//         <div className="relative w-80 h-96 flex items-center justify-center">
//           {/* T-shirt background color */}
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundColor: colorMap[color] || "#87CEEB", // Default to skyblue
//             }}
//           ></div>

//           {/* T-shirt overlay */}
//           <img
//             src={tshirtImages[printPlacement]}
//             alt="T-Shirt"
//             className="absolute inset-0 w-full h-full"
//             style={{ zIndex: 1 }}
//           />
//           <img
//             src={image}
//             alt="T-Shirt Design"
//             className="absolute"
//             style={{
//               width: `${(sizeMap[size] || 100) * (imageSize / 100)}%`, // Combine size and image scale
//               transform: `rotate(${rotation}deg)`,
//               zIndex: 2,
//             }}
//           />
//         </div>
//       )}

//       {/* Customization Options */}
//       <div className="w-80 space-y-4">
//         <h2 className="text-lg font-semibold">Customize It</h2>

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

//         <div>
//           <label className="block text-sm">Rotate</label>
//           <input
//             type="range"
//             min="0"
//             max="360"
//             step="10"
//             value={rotation}
//             onChange={(e) => setRotation(e.target.value)}
//             className="w-full"
//           />
//         </div>

//         <div>
//           <label className="block text-sm">Print Placement</label>
//           <select
//             className="w-full p-2 border rounded"
//             value={printPlacement}
//             onChange={(e) => setPrintPlacement(e.target.value)}
//           >
//             <option>Center Front</option>
//             <option>Center Back</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm">Size</label>
//           <select
//             className="w-full p-2 border rounded"
//             value={size}
//             onChange={(e) => {
//               console.log("Selected Size:", e.target.value); // Debugging
//               setSize(e.target.value);
//             }}
//           >
//             <option value="XS">XS</option>
//             <option value="S">S</option>
//             <option value="M">M</option>
//             <option value="L">L</option>
//             <option value="XL">XL</option>
//             <option value="2XL">2XL</option>
//             <option value="3XL">3XL</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm">Color</label>
//           <select
//             className="w-full p-2 border rounded"
//             value={color}
//             onChange={(e) => setColor(e.target.value)}
//           >
//             <option value="black">Black</option>
//             <option value="army">Army</option>
//             <option value="yellow">Yellow</option>
//             <option value="orange">Orange</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TShirtMockup;

import { useState } from "react";

const TShirtMockup = ({ image }) => {
  const [imageSize, setImageSize] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [printPlacement, setPrintPlacement] = useState("Center Front");
  const [size, setSize] = useState("XS");
  const [color, setColor] = useState("black");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Background color mapping
  const colorMap = {
    black: "#454545",
    army: "#4B5320",
    yellow: "#FFD700",
    orange: "#FFA500",
    babyblue: "#89CFF0",
    brown: "#8B4513",
    pink: "#FFC0CB",
    leaf: "#228B22",
    teamPurple: "#6A0DAD",
    kellyGreen: "#4CBB17",
    ash: "#B2BEB5",
    silver: "#C0C0C0",
  };

  const sizeMap = {
    XS: 80,
    S: 90,
    M: 100,
    L: 110,
    XL: 120,
    "2XL": 130,
    "3XL": 140,
  };

  // Product images per category and placement
  const categoryImages = {
    "T-Shirts": {
      "Center Front": "/Bella_Canvas_Front_Overlay_mask.png",
      "Center Back": "/Bella_Canvas_Back_Overlay_mask.png",
    },
    Hoodies: {
      "Center Front": "/Gildan_Pullover_Hoodie_L_Front_Mask.png",
      "Center Back": "/Gildan_Pullover_Hoodie_L_Back_Mask.png",
    },
    "Tank Tops": {
      "Center Front": "/Bella_Front_Overlay_mask.png",
      "Center Back": "/Bella_Back_Overlay_mask.png",
    },
  };

  return (
    <div className="flex flex-col gap-8 p-6">
      {/* Product Category Selection */}
      <div className="w-full space-y-4">
        <h2 className="text-lg font-semibold">Select Product</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
          {[
            "T-Shirts",
            "Hoodies",
            "Tank Tops",
            "Canvas",
            "Metal - White Gloss",
            "Wood",
            '1/4" Acrylic',
            "Tote Bags",
            "Throw Pillows",
            "Phone Cases",
            "Mugs",
            "Puzzles",
            "Porcelain Ornaments",
            "Metal Ornaments",
          ].map((category) => (
            <button
              key={category}
              className={`p-2 border rounded ${
                selectedCategory === category
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Show Customization Options Only If Apparel is Selected */}
      {["T-Shirts", "Hoodies", "Tank Tops"].includes(selectedCategory) && (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Apparel Display */}
          <div className="relative w-80 h-96 flex items-center justify-center">
            {/* Background color */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: colorMap[color] || "#87CEEB",
              }}
            ></div>

            {/* Product overlay (T-Shirt/Hoodie/Tank Top) */}
            <img
              src={categoryImages[selectedCategory]?.[printPlacement]}
              alt={selectedCategory}
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: 1 }}
            />

            {/* Design Image */}
            <img
              src={image}
              alt="T-Shirt Design"
              className="absolute"
              style={{
                width: `${(sizeMap[size] || 100) * (imageSize / 100)}%`,
                transform: `rotate(${rotation}deg)`,
                zIndex: 2,
              }}
            />
          </div>

          {/* Customization Options */}
          <div className="w-80 space-y-4">
            <h2 className="text-lg font-semibold">Customize It</h2>

            <div>
              <label className="block text-sm">Image Size</label>
              <input
                type="range"
                min="50"
                max="100"
                value={imageSize}
                onChange={(e) => setImageSize(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm">Rotate</label>
              <input
                type="range"
                min="0"
                max="360"
                step="10"
                value={rotation}
                onChange={(e) => setRotation(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm">Print Placement</label>
              <select
                className="w-full p-2 border rounded"
                value={printPlacement}
                onChange={(e) => setPrintPlacement(e.target.value)}
              >
                <option>Center Front</option>
                <option>Center Back</option>
              </select>
            </div>

            <div>
              <label className="block text-sm">Size</label>
              <select
                className="w-full p-2 border rounded"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
                <option value="3XL">3XL</option>
              </select>
            </div>

            <div>
              <label className="block text-sm">Color</label>
              <select
                className="w-full p-2 border rounded"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                {Object.keys(colorMap).map((key) => (
                  <option key={key} value={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TShirtMockup;

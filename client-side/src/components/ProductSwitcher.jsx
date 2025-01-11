import React, { useState } from "react";

const products = [
  { name: "Watercolor Fine Art Paper", image: "/path-to-image/watercolor.png" },
  { name: "Canvas", image: "/path-to-image/canvas.png" },
  { name: "Metal - White Gloss", image: "/path-to-image/metal-gloss.png" },
  { name: "Wood", image: "/path-to-image/wood.png" },
  { name: "1/4 Acrylic", image: "/path-to-image/acrylic.png" },
  { name: "Hoodies (No Zip or Pullover)", image: "/path-to-image/hoodies.png" },
  { name: "T-Shirts", image: "/path-to-image/tshirts.png" },
  { name: "Tank Tops", image: "/path-to-image/tanktops.png" },
  { name: "Tote Bags", image: "/path-to-image/totebags.png" },
  { name: "Throw Pillows", image: "/path-to-image/throwpillows.png" },
  { name: "Phone Cases", image: "/path-to-image/phonecases.png" },
  { name: "Mugs", image: "/path-to-image/mugs.png" },
  { name: "Puzzles", image: "/path-to-image/puzzles.png" },
  {
    name: "Porcelain Ornaments",
    image: "/path-to-image/porcelain-ornaments.png",
  },
  { name: "Metal Ornaments", image: "/path-to-image/metal-ornaments.png" },
];

const ProductSwitcher = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const currentProduct = products[currentProductIndex];

  return (
    <div className="flex flex-col items-center p-4">
      <div className="text-lg font-bold mb-2">{currentProduct.name}</div>
      <img
        src={currentProduct.image}
        alt={currentProduct.name}
        className="w-32 h-32 cursor-pointer"
        onClick={handleImageClick}
      />
    </div>
  );
};

export default ProductSwitcher;

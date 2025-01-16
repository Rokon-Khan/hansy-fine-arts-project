import { useState } from "react";
import { SketchPicker } from "react-color";
import Draggable from "react-draggable";
import { useLoaderData } from "react-router-dom";

const RoomPreview = () => {
  const product = useLoaderData();
  const { productImage } = product || {};
  const [wallColor, setWallColor] = useState("#ffffff");
  const [frameSize, setFrameSize] = useState({ width: 150, height: 120 });
  const [backgroundImage, setBackgroundImage] = useState(
    "https://i.ibb.co.com/BB8QQsH/Living-Room-WP.png"
  );
  const [uploadedRoom, setUploadedRoom] = useState(null);

  const galleryImages = [
    {
      label: "Living Room",
      url: "https://i.ibb.co.com/BB8QQsH/Living-Room-WP.png",
    },
    {
      label: "Restaurant",
      url: "https://i.ibb.co.com/TPc5Vxp/Restaurant-WP.png",
    },
    {
      label: "Bedroom",
      url: "https://i.ibb.co.com/c1RXxm3/Bedroom-WP.png",
    },
    {
      label: "Nursary",
      url: "https://i.ibb.co.com/94FMPqV/Nursery-WP.png",
    },
    {
      label: "Living Room",
      url: "https://i.ibb.co.com/ggLFxfR/Living-Room-1.jpg",
    },
    {
      label: "Home Office",
      url: "https://i.ibb.co.com/n8srvFW/Home-office-WP.png",
    },
    {
      label: "Recieption",
      url: "https://i.ibb.co.com/BTrsFmk/Reception-WP.png",
    },
    {
      label: "Living Room",
      url: "https://i.ibb.co.com/ggLFxfR/Living-Room-1.jpg",
    },
    {
      label: "Cafe",
      url: "https://i.ibb.co.com/CwJY8M9/Cafe-WP.png",
    },
    {
      label: "Conference Room",
      url: "https://i.ibb.co.com/1vHxhqH/Conference-room-WP.png",
    },
    {
      label: "Dining Room",
      url: "https://i.ibb.co.com/0jwVkCx/Living-Room-3.jpg",
    },
    {
      label: "Bedroom",
      url: "https://i.ibb.co.com/T2jzhdd/Living-Room-2.jpg",
    },
  ];

  const frameSizes = [
    { label: "15x12", width: 150, height: 120 },
    { label: "18x14", width: 180, height: 140 },
    { label: "23x18", width: 230, height: 180 },
    { label: "30x23", width: 300, height: 230 },
    { label: "36x28", width: 360, height: 280 },
    { label: "40x31", width: 400, height: 310 },
  ];

  const handleBackgroundChange = (image) => {
    setUploadedRoom(null); // Clear uploaded room
    setBackgroundImage(image.url);
  };

  const handleRoomUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedRoom(reader.result);
        setBackgroundImage(null); // Clear selected gallery image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleWallColorChange = (color) => {
    setWallColor(color.hex);
  };

  return (
    <div className="p-6">
      {/* Top Controls */}
      <div className="flex items-center justify-between mb-6 space-x-4">
        {/* Wall Color Selector */}
        <div>
          <label className="block font-bold text-sm mb-2">Wall Color</label>
          <SketchPicker
            color={wallColor}
            onChangeComplete={handleWallColorChange}
          />
        </div>

        {/* Frame Size Selector */}
        <div>
          <label className="block font-bold text-sm mb-2">Size</label>
          <select
            onChange={(e) => {
              const selectedSize = frameSizes.find(
                (size) => size.label === e.target.value
              );
              setFrameSize(selectedSize);
            }}
            className="border p-2 rounded w-full"
          >
            {frameSizes.map((size) => (
              <option key={size.label} value={size.label}>
                {size.label}
              </option>
            ))}
          </select>
        </div>

        {/* Upload Room Image */}
        <div>
          <label className="block font-bold text-sm mb-2">Upload Room</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleRoomUpload}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Room Preview */}
      <div
        className="relative mx-auto border rounded-lg overflow-hidden"
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: wallColor, // Apply wall color as background
        }}
      >
        {/* Background Image */}
        {uploadedRoom || backgroundImage ? (
          <img
            src={uploadedRoom || backgroundImage}
            alt="Room Background"
            className="w-full h-full object-cover"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: "none", // Prevent image from interfering with dragging
            }}
          />
        ) : null}

        {/* Draggable Frame */}
        <Draggable>
          <div
            className="absolute bg-white border border-gray-400 shadow-lg cursor-move"
            style={{
              width: `${frameSize.width}px`,
              height: `${frameSize.height}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img src={productImage} alt="" />
          </div>
        </Draggable>
      </div>

      {/* Room Gallery */}
      <h2 className="font-bold text-lg mt-6 mb-2 text-center">Select a Room</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-5 justify-center">
        {galleryImages.map((image) => (
          <div
            key={image.label}
            onClick={() => handleBackgroundChange(image)}
            className="cursor-pointer"
          >
            <img
              src={image.url}
              alt={image.label}
              className={`w-32 h-24 object-cover border rounded-lg ${
                backgroundImage === image.url
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
            />
            <p className="text-center text-sm">{image.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomPreview;

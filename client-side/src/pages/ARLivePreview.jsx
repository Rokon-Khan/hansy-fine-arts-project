import React, { useState } from "react";
import Draggable from "react-draggable";
import CameraFeed from "../components/CameraFeed";

const ARLivePreview = ({ image }) => {
  const [isPreviewActive, setIsPreviewActive] = useState(false); // Toggle AR Preview
  const [size, setSize] = useState({ width: 100, height: 150 }); // Resizable image size
  const [isCameraAllowed, setIsCameraAllowed] = useState(false); // Camera access status

  const handleStartPreview = async () => {
    try {
      // Request camera permissions
      await navigator.mediaDevices.getUserMedia({ video: true });
      setIsCameraAllowed(true); // Allow camera access
      setIsPreviewActive(true); // Start preview
    } catch (error) {
      console.error("Camera access denied:", error);
      alert("Please allow camera access to start the live preview.");
    }
  };

  const handleStopPreview = () => {
    setIsPreviewActive(false);
  };

  const handleResize = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setSize({ width: newSize, height: newSize });
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      {/* Video Feed */}
      {isPreviewActive && isCameraAllowed && (
        <div style={{ position: "relative" }}>
          <CameraFeed /> {/* CameraFeed for live video */}
          {/* Draggable Resizable Image Overlay */}
          <Draggable>
            <div
              style={{
                width: `${size.width}px`,
                height: `${size.height}px`,
                position: "absolute",
                top: "10%",
                left: "10%",
                backgroundImage: `url(${image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                border: "1px dashed gray",
              }}
            />
          </Draggable>
        </div>
      )}

      {/* Controls */}
      <div style={{ marginTop: "10px" }}>
        {!isPreviewActive ? (
          <button
            onClick={handleStartPreview}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Start Preview
          </button>
        ) : (
          <button
            onClick={handleStopPreview}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Stop Preview
          </button>
        )}
        {isPreviewActive && isCameraAllowed && (
          <div>
            <label className="block mt-2">Resize Image:</label>
            <input
              type="range"
              min="50"
              max="300"
              value={size.width}
              onChange={handleResize}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ARLivePreview;

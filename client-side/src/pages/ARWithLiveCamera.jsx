import { useState } from "react";
import ARPreview from "../components/ARPreview";
import CameraFeed from "../components/CameraFeed";

const ARWithLiveCamera = () => {
  const [showAR, setShowAR] = useState(false);

  return (
    <div className="w-full h-screen relative">
      {!showAR && (
        <div className="absolute inset-0">
          <CameraFeed />
          <button
            onClick={() => setShowAR(true)}
            className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Start AR Preview
          </button>
        </div>
      )}
      {showAR && <ARPreview />}
    </div>
  );
};

export default ARWithLiveCamera;

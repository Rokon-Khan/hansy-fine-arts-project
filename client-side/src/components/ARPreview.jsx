import { MindAR } from "mind-ar-react";

const ARPreview = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MindAR
        containerStyles={{ width: "100%", height: "100%" }}
        markerConfig={[
          {
            id: "marker1",
            url: "/path/to/marker.mind", // Marker file for AR detection
          },
        ]}
        models={[
          {
            markerId: "marker1",
            type: "gltf",
            modelUrl: "/path/to/model.glb", // Path to 3D model
          },
        ]}
      />
    </div>
  );
};

export default ARPreview;

// import "mind-ar-js/dist/mindar-face.prod.js";
// import React, { useEffect, useRef } from "react";

// const ARPreview = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const startAR = async () => {
//       const mindarThree = new window.MINDAR.FACE.MindARThree({
//         container: containerRef.current,
//       });
//       const { renderer, scene, camera } = mindarThree;

//       await mindarThree.start();
//       renderer.setAnimationLoop(() => {
//         renderer.render(scene, camera);
//       });
//     };

//     startAR();
//   }, []);

//   return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
// };

// export default ARPreview;

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const FrameCollection = () => {
//   const [frames, setFrames] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchFrames = async () => {
//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_API_URL}/api/list`,
//         {
//           // Add request body if needed, else pass an empty object.
//         }
//       );
//       setFrames(response.data); // Update state with fetched data
//       setLoading(false); // Stop loading
//     } catch (err) {
//       setError(err.message); // Handle errors
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchFrames(); // Fetch data when the component mounts
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Frame Collection</h1>
//       {frames.length > 0 ? (
//         <ul>
//           {frames.map((frame) => (
//             <li key={frame.collection_id}>
//               <h3>{frame.name}</h3>
//               <p>{frame.description}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No frames found.</p>
//       )}
//     </div>
//   );
// };

// export default FrameCollection;

import axios from "axios";
import React, { useEffect, useState } from "react";

const FrameCollection = () => {
  const [frames, setFrames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFrames = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/list", {
        // Add request body if needed, else pass an empty object.
      });
      setFrames(response.data.collections); // Access the `collections` property
      setLoading(false); // Stop loading
    } catch (err) {
      setError(err.message); // Handle errors
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFrames(); // Fetch data when the component mounts
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h1>Frame Collection</h1>
      {frames.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {frames.map((frame) => (
            <li key={frame.id} style={{ marginBottom: "20px" }}>
              <img
                src={frame.icon_url_1}
                alt={frame.name}
                style={{ width: "200px", height: "auto", borderRadius: "8px" }}
              />
              <h3>{frame.name}</h3>
              <p>{frame.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No frames found.</p>
      )}
    </div>
  );
};

export default FrameCollection;

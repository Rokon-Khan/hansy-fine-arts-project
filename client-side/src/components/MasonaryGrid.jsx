// import { useEffect, useState } from "react";
// import { PhotoProvider, PhotoView } from "react-photo-view";
// import "react-photo-view/dist/react-photo-view.css";
// import { Link } from "react-router-dom";
// // const images = [
// //   "./cuadro-vertical-1.jpg",
// //   "./cuadro-vertical-2.jpg",
// //   "./cuadro-horizontal-1.jpg",
// //   "./cuadro-vertical-3.jpg",
// //   "./cuadro-horizontal-2.jpg",
// //   "./cuadro-vertical-4.jpg",
// //   "./cuadro-horizontal-3.jpg",
// //   "./cuadro-horizontal-4.jpg",
// //   "./cuadro-horizontal-5.jpg",
// // ];

// const [products, setProducts] = useState([]);
//   useEffect(() => {
//     fetchAllProdcuts();
//   }, [products]);
//   const fetchAllProdcuts = async () => {
//     const { data } = await axios.get(
//       `${import.meta.env.VITE_API_URL}/arts`
//     );
//     // setProducts(data.data);
//     setProducts(data);
//   };

// const MasonaryGrid = () => {
//   // { productItem }
//   // const { _id, productTitle, image } = productItem || {};

//   return (
//     <>
//       <div className="max-w-[1140px] mx-auto mt-10">
//         <h2 className="text-3xl font-bold">Works of Artists</h2>
//       </div>
//       <div className="max-w-[1140px] columns-1 sm:columns-2  lg:columns-3 py-10 md:py-20 gap-4 mx-auto">
//         {/* <div className=" mb-4 break-inside-avoid transition hover:scale-105 shadow-xl ">
//           <img
//             className="w-full h-auto object-cover rounded-lg"
//             src={image}
//             alt=""
//           />
//         </div> */}
//         <PhotoProvider>
//           {products.map((src, idx) => (
//             <div className="mb-4 break-inside-avoid " key={idx}>
//               <PhotoView src={src}>
//               <Link to={`/product-detail/${productItem._id}`}>
//               <img
//                   className="w-full h-auto object-cover rounded-lg  cursor-pointer hover:transition-transform"
//                   src={src}
//                   alt=""
//                 />
//               </Link>
//               </PhotoView>
//             </div>
//           ))}
//         </PhotoProvider>
//       </div>
//     </>
//   );
// };

// export default MasonaryGrid;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { PhotoProvider, PhotoView } from "react-photo-view";
// import "react-photo-view/dist/react-photo-view.css";
// import { Link } from "react-router-dom";

// const MasonaryGrid = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchAllProducts();
//   }, []);

//   const fetchAllProducts = async () => {
//     try {
//       const { data } = await axios.get(
//         `${import.meta.env.VITE_API_URL}/arts`
//       );
//       setProducts(data); // Assuming `data` is an array of products
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   return (
//     <>
//       <div className="max-w-[1140px] mx-auto mt-10">
//         <h2 className="text-3xl font-bold">Works of Artists</h2>
//       </div>
//       <div className="max-w-[1140px] columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4 mx-auto">
//         <PhotoProvider>
//           {products.map((product) => (
//             <div
//               className="mb-4 break-inside-avoid transition hover:scale-105 shadow-xl"
//               key={product._id}
//             >
//               <PhotoView src={product.image}>
//                 <Link to={`/product-detail/${product._id}`}>
//                   <img
//                     className="w-full h-auto object-cover rounded-lg cursor-pointer"
//                     src={product.image}
//                     alt={product.productTitle}
//                   />
//                 </Link>
//               </PhotoView>
//             </div>
//           ))}
//         </PhotoProvider>
//       </div>
//     </>
//   );
// };

// export default MasonaryGrid;

import axios from "axios";
import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const MasonaryGrid = () => {
  const [products, setProducts] = useState([]);
  const [clickedItems, setClickedItems] = useState({}); // Tracks clicks for each product

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/arts`);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleImageClick = (productId) => {
    setClickedItems((prev) => ({
      ...prev,
      [productId]: !prev[productId], // Toggle the clicked state
    }));
  };

  return (
    <>
      <div className="max-w-[1140px] mx-auto mt-10">
        <h2 className="text-3xl font-bold">Works of Artists</h2>
      </div>
      <div className="max-w-[1140px] columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4 mx-auto">
        <PhotoProvider>
          {products.map((product) => (
            <div
              className="mb-4 break-inside-avoid transition hover:scale-105 shadow-xl"
              key={product._id}
            >
              {clickedItems[product._id] ? (
                // Navigate to detail page after second click
                <Link to={`/product-detail/${product._id}`}>
                  <img
                    className="w-full h-auto object-cover rounded-lg cursor-pointer"
                    src={product.image}
                    alt={product.productTitle}
                  />
                </Link>
              ) : (
                // Open PhotoView on first click
                <PhotoView src={product.image}>
                  <img
                    className="w-full h-auto object-cover rounded-lg cursor-pointer"
                    src={product.image}
                    alt={product.productTitle}
                    onClick={() => handleImageClick(product._id)}
                  />
                </PhotoView>
              )}
            </div>
          ))}
        </PhotoProvider>
      </div>
    </>
  );
};

export default MasonaryGrid;

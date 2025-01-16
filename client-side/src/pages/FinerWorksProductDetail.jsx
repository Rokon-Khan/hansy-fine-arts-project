// import { useState } from "react";
// import { CiImageOn } from "react-icons/ci";
// import "react-image-lightbox/style.css";
// import { Link, useNavigate } from "react-router-dom";
// import ArtPreview from "../components/ArtPreview";
// // import Google3DModelPreview from "../components/Google3DModelPreview";
// // import ProductList from "../components/ProductList";
// // import { GlassMagnifier } from "react-image-magnifiers";
// import ARLivePreview from "./ARLivePreview";

// const FinerWorksProductDetail = () => {
//   const { sku } = useParams();
//   const navigate = useNavigate();
//   const [finerWorksproduct, setFinerWorksproduct] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(
//           `${import.meta.env.VITE_API_URL}/products/${sku}`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch product details.");
//         }
//         const data = await response.json();
//         setFinerWorksproduct(data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchProduct();
//   }, [sku]);

//   if (error) {
//     return <p className="text-red-500 text-center">{error}</p>;
//   }

//   if (!finerWorksproduct) {
//     return <p>Loading product details...</p>;
//   }
//   return (
//     <div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Image Section */}
//         <div className="relative">
//           <div className="group">
//             <img
//               src={productImage}
//               alt="Product"
//               className="rounded-lg max-w-[400px] max-h-[400px] object-cover transform transition duration-300 group-hover:scale-110"
//             />
//           </div>
//           <div>
//             <Link to={`/roompreview/${_id}`}>
//               <CiImageOn className="text-5xl border-2 border-dotted bg-white p-2" />
//             </Link>
//             {/* <WebXRPreview imageUrl={productImage}></WebXRPreview> */}
//             <ARLivePreview image={productImage}></ARLivePreview>
//             <ArtPreview image={productImage}></ArtPreview>
//             {/* <Google3DModelPreview modelSrc={productImage} /> */}
//             {/* <Google3DModelPreview modelSrc="https://modelviewer.dev/shared-assets/models/Astronaut.glb" /> */}
//           </div>
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-3xl font-bold mb-2">{productTitle}</h1>
//           <p className="text-xl text-gray-600 font-semibold mb-4">${price}</p>
//           <p className="text-sm text-gray-500">
//             {/* or 4 interest-free payments of $13.39 with{" "} */}
//             {/* <span className="text-green-600 font-bold">Afterpay</span> */}
//           </p>

//           {/* Quantity Selector */}
//           <div className="flex items-center mt-4">
//             <input
//               type="number"
//               value={quantity}
//               min="1"
//               onChange={(e) => setQuantity(e.target.value)}
//               className="w-16 border rounded p-2"
//             />
//           </div>

//           {/* Add to Cart Buttons */}
//           <div className="mt-4 flex gap-4">
//             <button
//               onClick={() => handleAddToCart(product)}
//               className="bg-black text-white px-6 py-3 rounded uppercase hover:bg-gray-800"
//             >
//               Add to Cart
//             </button>
//             <button className="bg-gray-800 text-white px-6 py-3 rounded uppercase hover:bg-gray-900">
//               Instant Checkout
//             </button>
//           </div>

//           {/* Medium Selection */}
//           <div className="mt-8">
//             {/* <ProductList></ProductList> */}
//             {/* <FinerWorksAPI></FinerWorksAPI> */}
//             {/* <FrameCollection></FrameCollection> */}

//             <h2 className="text-lg font-bold mb-2">Medium</h2>
//             <div className="grid grid-cols-4 gap-2">
//               <button className="border p-4 rounded hover:bg-gray-200">
//                 Watercolor Fine Art Paper
//               </button>
//               <button className="border p-4 rounded hover:bg-gray-200">
//                 Canvas
//               </button>
//               <button className="border p-4 rounded hover:bg-gray-200">
//                 Metal - White Gloss
//               </button>
//               <button className="border p-4 rounded hover:bg-gray-200">
//                 Wood
//               </button>
//             </div>
//           </div>

//           {/* Size Selection */}
//           <div className="mt-6">
//             <h2 className="text-lg font-bold mb-2">Size</h2>
//             <select className="border rounded p-2 w-full">
//               <option>12 x 18</option>
//               <option>16 x 20</option>
//               <option>20 x 30</option>
//             </select>
//           </div>

//           {/* Style Selection */}
//           <div className="mt-6">
//             <h2 className="text-lg font-bold mb-2">Styles</h2>
//             <select className="border rounded p-2 w-full">
//               <option>Just the Print - 1" Border</option>
//               <option>Framed Print</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinerWorksProductDetail;

import { useEffect, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArtPreview from "../components/ArtPreview";
import apiClient from "../service/apiClient.js";
import ARLivePreview from "./ARLivePreview";

const FinerWorksProductDetail = () => {
  const { sku } = useParams();
  const navigate = useNavigate();
  const [finerWorksProduct, setFinerWorksProduct] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const url = "/api/products";
      try {
        const res = await apiClient.post(url, [
          { product_sku: sku, product_qty: 1 },
        ]);
        if (res.data?.product_list?.length > 0) {
          setFinerWorksProduct(res.data.product_list[0]);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProduct();
  }, [sku]);

  const handleAddToCart = (product) => {
    // Implement cart logic here or use the context
    console.log("Added to cart", product);
  };

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (!finerWorksProduct) {
    return <p>Loading product details...</p>;
  }

  const { image_url_1, name, per_item_price } = finerWorksProduct;

  return (
    <div className="max-w-7xl mx-auto p-4 my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="relative">
          <div className="group">
            <img
              src={image_url_1 || "https://via.placeholder.com/150"}
              alt={name}
              className="rounded-lg max-w-[400px] max-h-[400px] object-cover transform transition duration-300 group-hover:scale-110"
            />
          </div>
          <div>
            <Link to={`/roompreview/${sku}`}>
              <CiImageOn className="text-5xl border-2 border-dotted bg-white p-2" />
            </Link>
            <ARLivePreview image={image_url_1}></ARLivePreview>
            <ArtPreview image={image_url_1}></ArtPreview>
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{name}</h1>
          <p className="text-xl text-gray-600 font-semibold mb-4">
            ${per_item_price}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center mt-4">
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(e.target.value)}
              className="w-16 border rounded p-2"
            />
          </div>

          {/* Add to Cart Buttons */}
          <div className="mt-4 flex gap-4">
            <button
              onClick={() => handleAddToCart(finerWorksProduct)}
              className="bg-black text-white px-6 py-3 rounded uppercase hover:bg-gray-800"
            >
              Add to Cart
            </button>
            <button className="bg-gray-800 text-white px-6 py-3 rounded uppercase hover:bg-gray-900">
              Instant Checkout
            </button>
          </div>

          {/* Medium Selection */}
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-2">Medium</h2>
            <div className="grid grid-cols-4 gap-2">
              <button className="border p-4 rounded hover:bg-gray-200">
                Watercolor Fine Art Paper
              </button>
              <button className="border p-4 rounded hover:bg-gray-200">
                Canvas
              </button>
              <button className="border p-4 rounded hover:bg-gray-200">
                Metal - White Gloss
              </button>
              <button className="border p-4 rounded hover:bg-gray-200">
                Wood
              </button>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-2">Size</h2>
            <select className="border rounded p-2 w-full">
              <option>12 x 18</option>
              <option>16 x 20</option>
              <option>20 x 30</option>
            </select>
          </div>

          {/* Style Selection */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-2">Styles</h2>
            <select className="border rounded p-2 w-full">
              <option>Just the Print - 1" Border</option>
              <option>Framed Print</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinerWorksProductDetail;

// import React, { useState } from "react";
// import apiClient from "../service/apiClient.js";
// const FinerWorksAPI = () => {
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchProductDetails = async () => {
//     const url = "/api/products";

//     const data = [
//       { product_order_po: null, product_qty: 1, product_sku: "AP76264P535893" },
//       {
//         product_order_po: null,
//         product_qty: 1,
//         product_sku: "AP76264P535871",
//       },
//     ];

//     try {
//       const res = await apiClient.post(url, data);
//       setResponse(res.data); // Update state with response
//     } catch (err) {
//       setError(err.message); // Handle errors
//     }
//   };

//   return (
//     <div>
//       <button onClick={fetchProductDetails}>Get Product Details</button>
//       {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default FinerWorksAPI;

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { useCart } from "../cartprovider/CartContext.jsx";
// import apiClient from "../service/apiClient.js";

// const FinerWorksArt = () => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();
//   // const { _id, productTitle, productImage, price } = product || {};

//   // console.log(price);
//   const { dispatch } = useCart();

//   const handleAddToCart = (product) => {
//     // console.log(product.data);
//     dispatch({ type: "ADD_TO_CART", payload: product });

//     // Show success alert
//     Swal.fire({
//       title: "Added to Cart!",
//       text: `${productTitle} has been added to your cart.`,
//       icon: "success",
//       confirmButtonText: "Go to Cart",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Navigate to the cart route
//         navigate("/cart");
//       }
//     });
//   };

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       const url = "/api/products";
//       const finerarts = await apiClient.get("http://localhost:5000/finerarts");
//       console.log(finerarts);

//       const data = [
//         {
//           product_order_po: null,
//           product_qty: 4,
//           product_sku: "AP76264P535893",
//         },
//         {
//           product_order_po: null,
//           product_qty: 1,
//           product_sku: "AP76264P535871",
//         },
//         {
//           product_order_po: null,
//           product_qty: 1,
//           product_sku: "AP76264P535883",
//         },
//         {
//           product_order_po: null,
//           product_qty: 1,
//           product_sku: "AP76264P535884",
//         },
//       ];

//       try {
//         const res = await apiClient.post(url, finerarts.data);
//         console.log(res);

//         setProducts(res.data.product_list); // Assuming 'product_list' is the key in the response containing the products
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchProductDetails();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto p-4 my-10">
//       {error && <p className="text-red-500 text-center">{error}</p>}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="border rounded-lg shadow-md overflow-hidden"
//           >
//             <img
//               src={product.image_url_1 || "https://via.placeholder.com/150"}
//               alt={product.name || "Product Image"}
//               className="w-full h-auto object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">
//                 {product.name || "Finerworks Art for Printing"}
//               </h3>
//               {/* <p
//                 className="text-gray-700 text-sm"
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     product.description_long || "No description available",
//                 }}
//               ></p> */}
//               <div className="mt-4">
//                 <p className="text-blue-600 font-bold">
//                   Price: ${product.per_item_price}
//                 </p>
//                 {/* <p className="text-gray-500">
//                   Total Price: ${product.total_price}
//                 </p> */}
//               </div>
//               <button
//                 onClick={() => handleAddToCart(product)}
//                 className="bg-black text-white px-6 py-3 rounded uppercase hover:bg-gray-800"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FinerWorksArt;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCart } from "../cartprovider/CartContext.jsx";
import apiClient from "../service/apiClient.js";

const FinerWorksArt = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });

    Swal.fire({
      title: "Added to Cart!",
      text: `${product.name} has been added to your cart.`,
      icon: "success",
      confirmButtonText: "Go to Cart",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart");
      }
    });
  };
  const handleProductClick = (product) => {
    navigate(`/finer-works-product-detail/${product.product_sku}`);
  };
  // const handleProductClick = (product) => {
  //   navigate(`/product-detail`, {
  //     state: { sku: product.product_sku, product },
  //   });
  // };

  useEffect(() => {
    const fetchProductDetails = async () => {
      const url = "/api/products";
      try {
        const finerarts = await apiClient.get(
          "http://localhost:5000/finerarts"
        );
        const res = await apiClient.post(url, finerarts.data);
        setProducts(res.data.product_list);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProductDetails();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 my-10">
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            <img
              src={product.image_url_1 || "https://via.placeholder.com/150"}
              alt={product.name || "Product Image"}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                {product.name || "Finerworks Art for Printing"}
              </h3>
              <div className="mt-4">
                <p className="text-blue-600 font-bold">
                  Price: ${product.per_item_price}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigation on button click
                  handleAddToCart(product);
                }}
                className="bg-black text-white px-6 py-3 rounded uppercase hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinerWorksArt;

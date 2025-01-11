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

import React, { useEffect, useState } from "react";
import apiClient from "../service/apiClient.js";

const FinerWorksAPI = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const url = "/api/products";

      const data = [
        {
          product_order_po: null,
          product_qty: 4,
          product_sku: "AP76264P535893",
        },
        {
          product_order_po: null,
          product_qty: 1,
          product_sku: "AP76264P535871",
        },
        {
          product_order_po: null,
          product_qty: 1,
          product_sku: "AP76264P535883",
        },
      ];

      try {
        const res = await apiClient.post(url, data);
        setProducts(res.data.product_list); // Assuming 'product_list' is the key in the response containing the products
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProductDetails();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image_url_1 || "https://via.placeholder.com/150"}
              alt={product.name || "Product Image"}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                {product.name || "No Name Available"}
              </h3>
              <p
                className="text-gray-700 text-sm"
                dangerouslySetInnerHTML={{
                  __html:
                    product.description_long || "No description available",
                }}
              ></p>
              <div className="mt-4">
                <p className="text-blue-600 font-bold">
                  Price: ${product.per_item_price}
                </p>
                <p className="text-gray-500">
                  Total Price: ${product.total_price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinerWorksAPI;

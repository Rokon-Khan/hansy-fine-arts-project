import React, { useState } from "react";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCart } from "../cartprovider/CartContext";

const ProductDetail = () => {
  const product = useLoaderData();
  const navigate = useNavigate();
  const { productTitle, productImage, description, stockList, price } =
    product.data || {}; // Ensure fallback in case `product` is undefined

  console.log(price);
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    console.log(product.data);
    dispatch({ type: "ADD_TO_CART", payload: product.data });

    // Show success alert
    Swal.fire({
      title: "Added to Cart!",
      text: `${productTitle} has been added to your cart.`,
      icon: "success",
      confirmButtonText: "Go to Cart",
    }).then((result) => {
      if (result.isConfirmed) {
        // Navigate to the cart route
        navigate("/cart");
      }
    });
  };
  const [quantity, setQuantity] = useState(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false); // State for Lightbox
  // Replace with your image URL

  const handleEnlargeImage = () => {
    setIsLightboxOpen(true); // Open Lightbox
  };

  return (
    <div className="max-w-7xl mx-auto p-6 lg:my-20 my-10 bg-gray-100">
      {/* Title and Price */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="relative">
          <div className="group">
            <img
              src={productImage}
              alt="Product"
              className="rounded-lg max-w-[500px] max-h-full object-cover transform transition duration-300 group-hover:scale-110"
            />
            <p
              onClick={handleEnlargeImage}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-4 py-2 rounded cursor-pointer hover:bg-gray-900"
            >
              Click to Enlarge
            </p>
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">ALTUVE AND CORREA</h1>
          <p className="text-xl text-gray-600 font-semibold mb-4">$53.55</p>
          <p className="text-sm text-gray-500">
            or 4 interest-free payments of $13.39 with{" "}
            <span className="text-green-600 font-bold">Afterpay</span>
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
              onClick={() => handleAddToCart(product)}
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

      {/* Lightbox Component */}
      {isLightboxOpen && (
        <Lightbox
          mainSrc={productImage}
          onCloseRequest={() => setIsLightboxOpen(false)} // Close Lightbox
        />
      )}
    </div>
  );
};

export default ProductDetail;

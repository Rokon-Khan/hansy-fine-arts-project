// /* eslint-disable react-hooks/rules-of-hooks */
// import { Helmet } from "react-helmet";
// import { Toaster } from "react-hot-toast";
// import { FiHeart } from "react-icons/fi";
// import { IoMdStarHalf } from "react-icons/io";
// import { MdOutlineStarPurple500 } from "react-icons/md";
// import { useLoaderData } from "react-router-dom";
// import { useCart } from "../cartprovider/CartContext";
// // import { addTOCart, addTOWishList } from "../utilities/main";

// const ProductDetails = () => {
//   const product = useLoaderData();
//   // console.log(product);

//   const { productTitle, image, description, stockList, price } =
//     product.data || {};

//   const { dispatch } = useCart();

//   const handleAddToCart = (product) => {
//     dispatch({ type: "ADD_TO_CART", payload: product });
//     Swal.fire({
//       title: "Good job!",
//       text: "Your Are Logged in Successful!",
//       icon: "success",
//     });
//     // navigate after login
//     navigate(location?.state ? location.state : "/cart");
//   };
//   return (
//     <div>
//       {/* React Helmet */}
//       <Helmet>
//         <title>Product Details | Water Color Art</title>
//       </Helmet>
//       {/* React Helmet */}

//       <div className="w-full h-[463px] bg-[#9538E2] text-center text-white space-y-3  py-10">
//         <h2 className="text-3xl font-bold">Product Details</h2>
//         <p className=" max-w-[796px] mx-auto">
//           Explore the Elegant Watercolor Art diffrent types categories and
//           Design.
//         </p>
//       </div>

//       <div className="hero max-w-[1020px] bg-base-200 mx-auto rounded-xl relative -top-[200px]">
//         <div className="hero-content flex-col lg:flex-row gap-6">
//           <img
//             className="max-w-[424px] max-h-[503px] rounded-2xl"
//             src={image}
//           />
//           <div className="space-y-3">
//             <h3 className="text-3xl semi-bold">{productTitle}</h3>
//             <p className="text-lg text-gray-600 font-regular">
//               Price: ${price}
//             </p>
//             <span className="badge bg-[rgba(47,156,8,0.1)] p-3 font-bold">
//               {stockList}
//             </span>
//             <h1 className="text-2xl md:text-lg">{description}</h1>

//             <h4 className="text-xl font-bold flex gap-2 justify-start items-center">
//               Public Rating: 4.9
//               <span className="text-yellow-400 font-bold flex gap-2">
//                 <MdOutlineStarPurple500 />
//                 <MdOutlineStarPurple500 />
//                 <MdOutlineStarPurple500 />
//                 <MdOutlineStarPurple500 />
//                 <IoMdStarHalf />
//               </span>
//             </h4>
//             <button
//               to="/cart"
//               onClick={() => handleAddToCart(product)}
//               className="btn bg-[#9538E2] text-white"
//             >
//               Add To Cart
//               <i className="fa-solid fa-cart-shopping text-2xl "></i>
//             </button>
//             <button
//               to="/cart"
//               onClick={() => handleAddToWishlist(product)}
//               className="btn"
//             >
//               <FiHeart className="text-4xl bg-zinc-200 p-2 rounded-full"></FiHeart>
//             </button>
//             <Toaster></Toaster>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// import { Helmet } from "react-helmet";
// import { Toaster } from "react-hot-toast";
// import { FiHeart } from "react-icons/fi";
// import { IoMdStarHalf } from "react-icons/io";
// import { MdOutlineStarPurple500 } from "react-icons/md";
// import { useLoaderData, useNavigate } from "react-router-dom"; // Added `useNavigate`
// import Swal from "sweetalert2"; // Import SweetAlert
// import { useCart } from "../cartprovider/CartContext";

// const ProductDetails = () => {
//   const product = useLoaderData();
//   const navigate = useNavigate(); // Initialize `navigate`
//   const { productTitle, image, description, stockList, price } =
//     product.data || {};

//   const { dispatch } = useCart();

//   const handleAddToCart = (product) => {
//     dispatch({ type: "ADD_TO_CART", payload: product });
//     Swal.fire({
//       title: "Added to Cart!",
//       text: `${productTitle} has been added to your cart.`,
//       icon: "success",
//       confirmButtonText: "Go to Cart",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         navigate("/cart"); // Navigate to `/cart` after confirmation
//       }
//     });
//   };

//   const handleAddToWishlist = (product) => {
//     // Example wishlist functionality
//     Swal.fire({
//       title: "Added to Wishlist!",
//       text: `${productTitle} has been added to your wishlist.`,
//       icon: "success",
//     });
//   };

//   return (
//     <div>
//       {/* React Helmet */}
//       <Helmet>
//         <title>Product Details | Water Color Art</title>
//       </Helmet>

//       <div className="w-full h-[463px] bg-[#9538E2] text-center text-white space-y-3 py-10">
//         <h2 className="text-3xl font-bold">Product Details</h2>
//         <p className="max-w-[796px] mx-auto">
//           Explore the Elegant Watercolor Art different types categories and
//           Design.
//         </p>
//       </div>

//       <div className="hero max-w-[1020px] bg-base-200 mx-auto rounded-xl relative -top-[200px]">
//         <div className="hero-content flex-col lg:flex-row gap-6">
//           <img
//             className="max-w-[424px] max-h-[503px] rounded-2xl"
//             src={image}
//             alt={productTitle}
//           />
//           <div className="space-y-3">
//             <h3 className="text-3xl semi-bold">{productTitle}</h3>
//             <p className="text-lg text-gray-600 font-regular">
//               Price: ${price}
//             </p>
//             <span className="badge bg-[rgba(47,156,8,0.1)] p-3 font-bold">
//               {stockList}
//             </span>
//             <h1 className="text-2xl md:text-lg">{description}</h1>

//             <h4 className="text-xl font-bold flex gap-2 justify-start items-center">
//               Public Rating: 4.9
//               <span className="text-yellow-400 font-bold flex gap-2">
//                 <MdOutlineStarPurple500 />
//                 <MdOutlineStarPurple500 />
//                 <MdOutlineStarPurple500 />
//                 <MdOutlineStarPurple500 />
//                 <IoMdStarHalf />
//               </span>
//             </h4>
//             <button
//               onClick={() => handleAddToCart(product)}
//               className="btn bg-[#9538E2] text-white"
//             >
//               Add To Cart
//               <i className="fa-solid fa-cart-shopping text-2xl ml-2"></i>
//             </button>
//             <button
//               onClick={() => handleAddToWishlist(product)}
//               className="btn"
//             >
//               <FiHeart className="text-4xl bg-zinc-200 p-2 rounded-full"></FiHeart>
//             </button>
//             <Toaster />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { FiHeart } from "react-icons/fi";
import { IoMdStarHalf } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCart } from "../cartprovider/CartContext";

const ProductDetails = () => {
  const product = useLoaderData();
  const navigate = useNavigate();
  const { _id, name, image, description, stockList, price } =
    product.data || {}; // Ensure fallback in case `product` is undefined

  console.log(price);
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    console.log(product.data);
    dispatch({ type: "ADD_TO_CART", payload: product.data });

    // Show success alert
    Swal.fire({
      title: "Added to Cart!",
      text: `${name} has been added to your cart.`,
      icon: "success",
      confirmButtonText: "Go to Cart",
    }).then((result) => {
      if (result.isConfirmed) {
        // Navigate to the cart route
        navigate("/cart");
      }
    });
  };

  const handleAddToWishlist = () => {
    Swal.fire({
      title: "Added to Wishlist!",
      text: `${name} has been added to your wishlist.`,
      icon: "success",
    });
  };

  return (
    <div>
      <Helmet>
        <title>Product Details | Water Color Art</title>
      </Helmet>

      <div className="w-full h-[463px] bg-[#9538E2] text-center text-white space-y-3 py-10">
        <h2 className="text-3xl font-bold">Product Details</h2>
        <p className="max-w-[796px] mx-auto">
          Explore the Elegant Watercolor Art different types categories and
          Design.
        </p>
      </div>

      <div className="hero max-w-[1020px] bg-base-200 mx-auto rounded-xl relative -top-[200px]">
        <div className="hero-content flex-col lg:flex-row gap-6">
          <img
            className="max-w-[424px] max-h-[503px] rounded-2xl"
            src={image}
            alt={name}
          />
          <div className="space-y-3">
            <h3 className="text-3xl semi-bold">{name}</h3>
            <p className="text-lg text-gray-600 font-regular">
              Price: ${price} {/* Ensure `price` is shown correctly */}
            </p>
            <span className="badge bg-[rgba(47,156,8,0.1)] p-3 font-bold">
              {stockList && stockList.length > 0
                ? stockList.join(", ") // Display stock status
                : "Out of Stock"}
            </span>
            <h1 className="text-2xl md:text-lg">{description}</h1>

            <h4 className="text-xl font-bold flex gap-2 justify-start items-center">
              Public Rating: 4.9
              <span className="text-yellow-400 font-bold flex gap-2">
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <IoMdStarHalf />
              </span>
            </h4>
            <button
              onClick={() => handleAddToCart(product)}
              className="btn bg-[#9538E2] text-white"
            >
              Add To Cart
              <i className="fa-solid fa-cart-shopping text-2xl ml-2"></i>
            </button>
            <button onClick={handleAddToWishlist} className="btn">
              <FiHeart className="text-4xl bg-zinc-200 p-2 rounded-full"></FiHeart>
            </button>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

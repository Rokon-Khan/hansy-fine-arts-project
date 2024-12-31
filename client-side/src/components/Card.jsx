// import { Link, useLocation } from "react-router-dom";
// import { useCart } from "../cartprovider/CartContext";

// const Card = ({ product, handleRemove }) => {
//   const { pathname } = useLocation();
//   const { _id, title, productImage, category, price } = product || {};
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
//     <div className="flex relative">
//       <div
//         // to={`/product/${_id}`}
//         className="transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden"
//       >
//         <figure className=" w-[282px] h-[300px] overflow-hidden">
//           <img className="" src={productImage} alt="" />
//         </figure>
//         <div className="p-4">
//           <h1 className="text-2xl font-bold">{title}</h1>
//           <p className="text-2xl font-bold">Price: ${price}</p>
//         </div>
//         <Link
//           to={`/product/${_id}`}
//           className="btn text-xl text-purple-600 rounded-full border-2 border-purple-600"
//         >
//           View Details
//         </Link>
//         <button
//           to="/cart"
//           onClick={() => handleAddToCart(product)}
//           className="btn bg-[#9538E2] text-white"
//         >
//           Add To Cart
//           <i className="fa-solid fa-cart-shopping text-2xl "></i>
//         </button>
//       </div>
//       {pathname === "/cart" && (
//         <div
//           onClick={() => handleRemove(_id)}
//           className="absolute p-3 rounded-full cursor-pointer bg-warning -top-5 -right-5"
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Card;

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert
import { useCart } from "../cartprovider/CartContext";

const Card = ({ product, handleRemove }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate(); // Initialize navigate function
  const { _id, productTitle, productImage, category, price } = product || {};
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });

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

  return (
    <div className="flex relative">
      <div className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden">
        <figure className="w-[282px] h-[300px] overflow-hidden">
          <img src={productImage} alt={productTitle} />
        </figure>
        <div className="p-4">
          <h1 className="text-2xl font-bold">{productTitle}</h1>
          {/* <p className="text-2xl font-bold">Price: ${price}</p> */}
        </div>
        <Link
          to={`/product-detail/${_id}`}
          className="btn text-xl text-black-600 rounded-lg border-2 border-black-600"
        >
          View Details
        </Link>
        {/* <button
          onClick={() => handleAddToCart(product)}
          className="btn bg-[#9538E2] text-white"
        >
          Add To Cart
          <i className="fa-solid fa-cart-shopping text-2xl ml-2"></i>
        </button> */}
      </div>
      {pathname === "/cart" && (
        <div
          onClick={() => handleRemove(_id)}
          className="absolute p-3 rounded-full cursor-pointer bg-warning -top-5 -right-5"
        >
          <i className="fa-solid fa-trash text-red-600"></i>
        </div>
      )}
    </div>
  );
};

export default Card;

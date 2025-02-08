// import PropTypes from "prop-types";

// import { Link } from "react-router-dom";

// const CategoryCard = ({ product }) => {
//   const { _id, productTitle, image } = product || {};
//   return (
//     <Link
//       to={`/product-detail/${_id}`}
//       className="col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl"
//     >
//       <div className="flex flex-col gap-2 w-full">
//         <div
//           className="

//               w-full
//               relative
//               overflow-hidden
//               rounded-xl
//             "
//         >
//           <img
//             className="
//                 object-cover
//                 h-full
//                 w-full
//                 group-hover:scale-110
//                 transition
//               "
//             src={image}
//             alt="Product Image"
//           />
//           <div
//             className="
//               absolute
//               top-4
//               right-4
//             "
//           ></div>
//         </div>
//         <div className="font-semibold text-lg">{productTitle}</div>
//         {/* <div className="font-semibold text-lg">Category: {productTitle}</div> */}
//         {/* <div className="font-semibold text-lg">Quantity: {quantity}</div> */}
//         {/* <div className="flex flex-row items-center gap-1">
//           <div className="font-semibold">Price: {price}$</div>
//         </div> */}
//       </div>
//     </Link>
//   );
// };
// CategoryCard.propTypes = {
//   product: PropTypes.shape({
//     name: PropTypes.string,
//     category: PropTypes.string,
//     quantity: PropTypes.number,
//     price: PropTypes.number,
//     image: PropTypes.string,
//     _id: PropTypes.string,
//   }).isRequired,
// };
// export default CategoryCard;

// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import "../App.css";

// const CategoryCard = ({ product }) => {
//   const { _id, productTitle, image, category } = product || {};
//   return (
//     <Link
//       to={`/product-detail/${_id}`}
//       className="col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl"
//     >
//       <div className="flex flex-col gap-2 w-full">
//         <div
//           className="
//               w-full
//               relative
//               overflow-hidden
//               rounded-xl
//             "
//         >
//           <img
//             className="
//                 object-cover
//                 h-full
//                 w-full
//                 group-hover:scale-110
//                 transition
//               "
//             src={image}
//             alt="Product Image"
//           />
//           <div
//             className="
//               absolute
//               inset-0
//               flex
//               items-center
//               justify-center
//               bg-black
//               bg-opacity-50
//               opacity-0
//               group-hover:opacity-100
//               transition
//             "
//           >
//             <div className="text-white text-center">
//               {/* <div className="font-semibold text-lg">{productTitle}</div> */}
//               <div className="font-semibold text-lg">Category: {category}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// CategoryCard.propTypes = {
//   product: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     productTitle: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default CategoryCard;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css";

const CategoryCard = ({ art }) => {
  const { _id, image, category } = art || {};
  return (
    <Link to={`/product-detail/${_id}`} className="pain-fram">
      <img src={image} alt="Product Image" />
      <div className="paint-title">
        <h2>Category: {category}</h2>
      </div>
    </Link>
  );
};

CategoryCard.propTypes = {
  art: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    productTitle: PropTypes.string,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;

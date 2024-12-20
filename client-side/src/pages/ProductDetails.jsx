/* eslint-disable react-hooks/rules-of-hooks */
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { FiHeart } from "react-icons/fi";
import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { addTOCart, addTOWishList } from "../utilities/main";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);

  //   "_id": "67653c2b0f17dbe4d1e69c80",
  // "productTitle": "Patriat-1",
  // "stockList": null,
  // "SKU": "POTRAIT",
  // "stock": "100",
  // "discount": "20",
  // "price": "100",
  // "productImage": "https://i.ibb.co.com/BjftyCv/cuadro-vertical-1.jpg",
  // "category": "Portrait"

  const {
    productTitle,
    productImage,
    description,

    category,
    price,
  } = product;

  //   Handle favorite btn click
  const handleAddToCart = (product) => {
    addTOCart(product);
    // getAllCarts();
  };
  const handleAddToWishlist = (product) => {
    addTOWishList(product);
  };
  return (
    <div>
      {/* React Helmet */}
      <Helmet>
        <title>Product Details | Water Color Art</title>
      </Helmet>
      {/* React Helmet */}
      <Navbar></Navbar>
      <div className="w-full h-[463px] bg-[#9538E2] text-center text-white space-y-3  py-10">
        <h2 className="text-3xl font-bold">Product Details</h2>
        <p className=" max-w-[796px] mx-auto">
          Explore the Elegant Watercolor Art diffrent types categories and
          Design.
        </p>
      </div>

      <div className="hero max-w-[1020px] bg-base-200 mx-auto rounded-xl relative -top-[200px]">
        <div className="hero-content flex-col lg:flex-row gap-6">
          <img
            className="max-w-[424px] max-h-[503px] rounded-2xl"
            src={productImage}
          />
          <div className="space-y-3">
            <h3 className="text-3xl semi-bold">{productTitle}</h3>
            <p className="text-lg text-gray-600 font-regular">
              Price: ${price}
            </p>
            <span className="badge bg-[rgba(47,156,8,0.1)] p-3 font-bold">
              In Stock
            </span>
            <h1 className="text-2xl md:text-lg">{description}</h1>
            {/* <div className="flex flex-col justify-center gap-6">
              <h1 className="text-2xl font-bold">Specification:</h1>
              <ul className="text-xl ml-12">
                {specification &&
                  specification.map((item, i) => (
                    <li className="list-disc" key={i}>
                      {item}
                    </li>
                  ))}
              </ul>
            </div> */}
            <h4 className="text-xl font-bold">
              Rating <i className="text-yellow-300 fa-solid fa-star"></i>
            </h4>
            <div>
              <i className="text-yellow-300 fa-solid fa-star"></i>
              <i className="text-yellow-300 fa-solid fa-star"></i>
              <i className="text-yellow-300 fa-solid fa-star"></i>
              <i className="text-yellow-300 fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              4.9
            </div>
            <button
              to="/cart"
              onClick={() => handleAddToCart(product)}
              className="btn bg-[#9538E2] text-white"
            >
              Add To Cart
              <i className="fa-solid fa-cart-shopping text-2xl "></i>
            </button>
            <button
              to="/cart"
              onClick={() => handleAddToWishlist(product)}
              className="btn"
            >
              <FiHeart className="text-4xl bg-zinc-200 p-2 rounded-full"></FiHeart>
            </button>
            <Toaster></Toaster>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
// import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import { Toaster } from "react-hot-toast";
// import { FiHeart } from "react-icons/fi";
// import { useLoaderData, useParams } from "react-router-dom";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import { addTOCart, addTOWishList } from "../utilities/main";

// const ProductDetails = () => {
//   const product = useLoaderData(); // Directly get the product from the loader
//   const {id} = useParams()
//   const [isLoading, setIsLoading] = useState(false);

//   // Ensure the product data is valid
//   useEffect(() => {
//     if (!product) {
//       setIsLoading(true);
//     } else {
//       setIsLoading(false);
//     }
//   }, [product]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   const { productTitle, productImage, description, category, price } = product;

//   const handleAddToCart = (product) => {
//     addTOCart(product);
//   };

//   const handleAddToWishlist = (product) => {
//     addTOWishList(product);
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>Product Details | Water Color Art</title>
//       </Helmet>
//       <Navbar />
//       <div className="w-full h-[463px] bg-[#9538E2] text-center text-white space-y-3 py-10">
//         <h2 className="text-3xl font-bold">Product Details</h2>
//         <p className="max-w-[796px] mx-auto">
//           Explore the Elegant Watercolor Art different types categories and
//           designs.
//         </p>
//       </div>

//       <div className="hero max-w-[1020px] bg-base-200 mx-auto rounded-xl relative -top-[200px]">
//         <div className="hero-content flex-col lg:flex-row gap-6">
//           <img
//             className="max-w-[424px] max-h-[503px] rounded-2xl"
//             src={productImage}
//             alt={productTitle}
//           />
//           <div className="space-y-3">
//             <h3 className="text-3xl semi-bold">{productTitle}</h3>
//             <p className="text-lg text-gray-600 font-regular">
//               Price: ${price}
//             </p>
//             <span className="badge bg-[rgba(47,156,8,0.1)] p-3 font-bold">
//               In Stock
//             </span>
//             <h1 className="text-2xl md:text-lg">{description}</h1>
//             <h4 className="text-xl font-bold">
//               Rating <i className="text-yellow-300 fa-solid fa-star"></i>
//             </h4>
//             <div>
//               <i className="text-yellow-300 fa-solid fa-star"></i>
//               <i className="text-yellow-300 fa-solid fa-star"></i>
//               <i className="text-yellow-300 fa-solid fa-star"></i>
//               <i className="text-yellow-300 fa-solid fa-star"></i>
//               <i className="fa-regular fa-star"></i>
//               4.9
//             </div>
//             <button
//               onClick={() => handleAddToCart(product)}
//               className="btn bg-[#9538E2] text-white"
//             >
//               Add To Cart
//               <i className="fa-solid fa-cart-shopping text-2xl"></i>
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
//       <Footer />
//     </div>
//   );
// };

// export default ProductDetails;

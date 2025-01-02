// import { useEffect, useState } from "react";
// import { useLoaderData, useNavigate, useParams } from "react-router-dom";
// import Card from "./Card";

// const ProductCards = () => {
//   const navigate = useNavigate();

//   const data = useLoaderData();
//   const { category } = useParams();
//   const [product, setProduct] = useState([]);
//   useEffect(() => {
//     if (category) {
//       const filteredByCategory = [...data].filter(
//         (product) => product.category === category
//       );
//       setProduct(filteredByCategory);
//     } else {
//       // setProduct(data.slice(0, 6));
//       setProduct(data);
//     }
//   }, [category, data]);
//   // console.log(data);
//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
//         {product.length > 0 ? (
//           product.map((product) => <Card key={product.id} product={product} />)
//         ) : (
//           <h2 className="text-4xl font-bold text-[#9538E2] text-center bg-slate-200 p-6 rounded-lg max-w-[1024px] my-10 mx-auto">
//             No Data are available
//           </h2>
//         )}
//       </div>
//       {/* <button className="btn btn-warning" onClick={() => navigate("/product")}>
//         View All
//       </button> */}
//     </>
//   );
// };

// export default ProductCards;

// import { useParams } from "react-router-dom";
// import Card from "./Card";

// const ProductCards = ({ products = [] }) => {
//   const { category } = useParams(); // Get category from the URL
//   const filteredProducts = category
//     ? products.filter((product) => product.category === category) // Filter by category
//     : products; // Show all products

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
//       {filteredProducts.length > 0 ? (
//         filteredProducts.map((product) => (
//           <Card key={product.id} product={product} />
//         ))
//       ) : (
//         <h2 className="text-4xl font-bold text-[#9538E2] text-center bg-slate-200 p-6 rounded-lg max-w-[1024px] my-10 mx-auto">
//           No Data Available
//         </h2>
//       )}
//     </div>
//   );
// };

// export default ProductCards;

import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const ProductCards = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {products.length > 0 ? (
        products.map((product) => <Card key={product._id} product={product} />)
      ) : (
        <h2 className="text-4xl font-bold text-[#9538E2] text-center bg-slate-200 p-6 rounded-lg max-w-[1024px] my-10 mx-auto">
          No products available for this category
        </h2>
      )}
    </div>
  );
};

export default ProductCards;

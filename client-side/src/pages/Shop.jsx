// import { useEffect, useState } from "react";
// import { Outlet, useLoaderData } from "react-router-dom";
// import Categories from "../components/Categories";
// import Spinner from "../components/Spinner";

// const Shop = () => {
//   const products = useLoaderData();
//   const [loading, setLoading] = useState(true);
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     // Simulate loading delay (if needed)
//     const timeout = setTimeout(() => {
//       setCategories([
//         // ...new Set(products.data.map((product) => product.category)),
//         ...new Set(products.map((product) => product.category)),
//       ]); // Compute categories
//       setLoading(false); // Stop loading
//     }, 500); // Adjust delay as needed

//     return () => clearTimeout(timeout); // Clean up timeout
//   }, [products.data]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <Spinner /> {/* Your loading spinner component */}
//       </div>
//     );
//   }
//   //  // Load all products
//   // const categories = [
//   //   ...new Set(products.map((product) => product.category)), // Extract unique categories
//   // ];

//   return (
//     <div>
//       <h1 className="text-4xl font-bold text-center">
//         Explore Explore the beautiful Water Color Art
//       </h1>
//       <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-2 gap-10">
//         {/* Categories Sidebar */}
//         <div className="shadow-xl lg:col-span-3  ">
//           <Categories categories={categories}></Categories>
//         </div>

//         {/* Product List Section */}
//         <div className="lg:col-span-9">
//           {/* Outlet for category-based routing */}
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;

// import { useEffect, useState } from "react";
// import { Outlet, useLoaderData } from "react-router-dom";
// import Categories from "../components/Categories";
// import Spinner from "../components/Spinner";

// const Shop = () => {
//   const products = useLoaderData();
//   const [loading, setLoading] = useState(true);
//   const [categories, setCategories] = useState([]);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

//   useEffect(() => {
//     // Simulate loading delay (if needed)
//     const timeout = setTimeout(() => {
//       setCategories([...new Set(products.map((product) => product.category))]); // Compute categories
//       setLoading(false); // Stop loading
//     }, 500); // Adjust delay as needed

//     return () => clearTimeout(timeout); // Clean up timeout
//   }, [products]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <Spinner /> {/* Your loading spinner component */}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1 className="text-4xl font-bold text-center my-6">
//         Explore the Beautiful Watercolor Art
//       </h1>
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 gap-10">
//         {/* Toggle Button for Mobile */}
//         <button
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="lg:hidden block bg-purple-500 text-white px-4 py-2 rounded-md mx-auto"
//         >
//           {isSidebarOpen ? "Hide Categories" : "Show Categories"}
//         </button>

//         {/* Categories Sidebar */}
//         <div
//           className={`lg:col-span-3 transition-all duration-300 bg-gray-100 shadow-xl p-4 ${
//             isSidebarOpen ? "block" : "hidden"
//           } lg:block`}
//         >
//           <Categories categories={categories}></Categories>
//         </div>

//         {/* Product List Section */}
//         <div className="lg:col-span-9 md:col-span-9 grid-cols-1">
//           {/* Outlet for category-based routing */}
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;

import { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import Spinner from "../components/Spinner";

const Shop = () => {
  const products = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  useEffect(() => {
    // Simulate loading delay (if needed)
    const timeout = setTimeout(() => {
      setCategories([...new Set(products.map((product) => product.category))]); // Compute categories
      setLoading(false); // Stop loading
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timeout); // Clean up timeout
  }, [products]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner /> {/* Your loading spinner component */}
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-6">
        Explore the Beautiful Watercolor Art
      </h1>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 gap-10">
        {/* Toggle Button for Mobile */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden block bg-purple-500 text-white px-4 py-2 rounded-md mx-auto md:absolute md:top-4 md:left-1/2 md:transform md:-translate-x-1/2"
        >
          {isSidebarOpen ? "Hide Categories" : "Show Categories"}
        </button>

        {/* Categories Sidebar */}
        <div
          className={`lg:col-span-3 transition-all duration-300 bg-gray-100 shadow-xl p-4 ${
            isSidebarOpen ? "block" : "hidden"
          } lg:block`}
        >
          <Categories categories={categories}></Categories>
        </div>

        {/* Product List Section */}
        <div className="lg:col-span-9 md:col-span-9 grid-cols-1 flex justify-center items-center h-full md:h-auto">
          {/* Outlet for category-based routing */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Shop;

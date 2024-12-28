import { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import Spinner from "../components/Spinner";

const Shop = () => {
  const products = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Simulate loading delay (if needed)
    const timeout = setTimeout(() => {
      setCategories([
        ...new Set(products.data.map((product) => product.category)),
      ]); // Compute categories
      setLoading(false); // Stop loading
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timeout); // Clean up timeout
  }, [products.data]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner /> {/* Your loading spinner component */}
      </div>
    );
  }
  //  // Load all products
  // const categories = [
  //   ...new Set(products.map((product) => product.category)), // Extract unique categories
  // ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        Explore Explore the beautiful Water Color Art
      </h1>
      <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-2 gap-10">
        {/* Categories Sidebar */}
        <div className="shadow-xl lg:col-span-3">
          <Categories categories={categories}></Categories>
        </div>

        {/* Product List Section */}
        <div className="lg:col-span-9">
          {/* Outlet for category-based routing */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Shop;

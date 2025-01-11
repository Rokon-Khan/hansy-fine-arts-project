import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="grid lg:grid-cols-1 grid-flow-row gap-5 lg:p-10 p-5">
      {/* "All Products" Button */}
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          `font-bold ${
            isActive
              ? "text-black bg-[#d8dfd8] btn rounded-full"
              : "btn rounded-full hover:text-black"
          }`
        }
      >
        All Products
      </NavLink>

      {/* Category Buttons */}
      {categories.map((category) => (
        <NavLink
          key={category}
          to={`/shop/category/${category}`} // Link to category route
          className={({ isActive }) =>
            `font-bold ${
              isActive
                ? "text-black bg-[#d8dfd8] btn rounded-full"
                : "btn rounded-full hover:text-zinc-500"
            }`
          }
        >
          {category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;

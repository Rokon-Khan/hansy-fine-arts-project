import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 gap-5 lg:p-10 p-5">
      {/* "All Products" Button */}
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          `font-bold ${
            isActive
              ? "text-white bg-[#9538E2] btn rounded-full"
              : "btn rounded-full hover:text-[#9538E2]"
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
                ? "text-white bg-[#9538E2] btn rounded-full"
                : "btn rounded-full hover:text-[#9538E2]"
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

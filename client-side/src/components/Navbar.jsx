import { useContext, useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/hansyeaggy-logo.png";
import { AuthContext } from "../authprovider/AuthProvider";
import { useCart } from "../cartprovider/CartContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogOut = () => {
    logOut().then().catch();
  };
  // Cart Data
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
  // const [cartLength, setCartLength] = useState(0);
  // useEffect(() => {
  //   const load = async () => {
  //     const carts = await getAllCarts();
  //     const wishlists = await getAllWishlists();
  //     // setCartLength(carts.length);
  //   };
  //   load();
  // }, []);

  return (
    <div className="  bg-base-200 sticky top-0 z-50">
      <div className="navbar backdrop-blur-xl bg-white/80  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-[#b09f7b]" : "hover:text-[#b09f7b]"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-[#b09f7b]" : "hover:text-[#b09f7b]"
                  }`
                }
                to="/gallery"
              >
                Gallery
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-[#b09f7b]" : "hover:text-[#b09f7b]"
                  }`
                }
                to="/bio"
              >
                Bio
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-[#b09f7b]" : "hover:text-[#b09f7b]"
                  }`
                }
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-[#b09f7b]" : "hover:text-[#b09f7b]"
                  }`
                }
                to="/shop"
              >
                Artist Shop
              </NavLink>
              {/* <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-[#b09f7b]" : "hover:text-[#b09f7b]"
                  }`
                }
                to="/cart"
              >
                cart
              </NavLink> */}
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-[#b09f7b]" : "hover:text-[#b09f7b]"
                  }`
                }
                to="/faq"
              >
                Faq
              </NavLink>
            </ul>
          </div>
          <Link to="/" className="lg:flex hidden">
            <img className="max-w-[150px] max-h-[150px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-6 text-lg px-1 gap-6">
            {/* <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-[#b09f7b] bg-white px-3 py-2 rounded-xl"
                    : "hover:text-[#b09f7b]"
                }`
              }
              to="/"
            >
              Home
            </NavLink> */}
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-[#b09f7b]  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-[#b09f7b]"
                }`
              }
              to="/shop-art"
            >
              <div className="dropdown dropdown-hover">
                <div tabIndex={0}>SHOP ART</div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100  z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/contemporary"> Contemporary</Link>
                  </li>
                  <li>
                    <Link to="/abstract-designs">Abstract & Designs</Link>
                  </li>
                  <li>
                    <Link to="/custom-portrait">Custom Portraits</Link>
                  </li>
                </ul>
              </div>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-[#b09f7b]  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-[#b09f7b]"
                }`
              }
              to="/custom-portrait"
            >
              CUSTOM PORTRAIT
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-[#b09f7b]  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-[#b09f7b]"
                }`
              }
              to="/artsy-product"
            >
              ARTSY PRODUCTS
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-[#b09f7b]  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-[#b09f7b]"
                }`
              }
              to="/bio"
            >
              ABOUT
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-[#b09f7b]  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-[#b09f7b]"
                }`
              }
              to="/contact"
            >
              CONTACT
            </NavLink>
            {/* <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-[#b09f7b]  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-[#b09f7b]"
                }`
              }
              to="/shop"
            >
              Artist Shop
            </NavLink> */}
            {/* <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-[#b09f7b] bg-white px-3 py-2 rounded-xl"
                    : "hover:text-[#b09f7b]"
                }`
              }
              to="/cart"
            >
              Cart
            </NavLink> */}
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-[#b09f7b] bg-white px-3 py-2 rounded-xl"
                    : "hover:text-[#b09f7b]"
                }`
              }
              to="/faq"
            >
              FAQ
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <button
            className="btn btn-ghost btn-circle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m8.485-8.485h-1M4.515 12h-1m15.364 4.95l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728l-.707-.707M6.343 17.657l-.707-.707M12 9a3 3 0 100 6 3 3 0 000-6z"
                />
              </svg>
            )}
          </button>
          {/* <div>
            <AiOutlineShoppingCart className="text-4xl bg-zinc-200 p-2 rounded-full" />
            <span className="relative -top-12 -right-8 bg-white text-lg font-bold p-1 rounded-full">
              0
            </span>
          </div> */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {totalItems}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  Your Favourites: {totalItems}
                </span>
                {/* <span className="text-info">Favourites: ${totalPrice}</span> */}
                <div className="card-actions">
                  <Link
                    to="/cart"
                    className="btn bg-zinc-800 text-white btn-block"
                  >
                    Fvourites
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {totalItems}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  Total Items: {totalItems}
                </span>
                <span className="text-info">Subtotal: ${totalPrice}</span>
                <div className="card-actions">
                  <Link
                    to="/cart"
                    className="btn bg-zinc-800 text-white btn-block"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <FiHeart className="text-4xl bg-zinc-200 p-2 rounded-full"></FiHeart>
            <span className="relative -top-12 -right-8 bg-white text-lg font-bold p-1 rounded-full">
              0
            </span>
          </div> */}
          {/* <div>
            <Link
              to="/login"
              className="btn bg-[#9538E2] text-lg text-white font-bold "
            >
              Create an Account
            </Link>
          </div> */}

          {user && user.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div>
                  <FaRegCircleUser className="text-4xl bg-slate-100 p-2  rounded-full" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={"/dashboard"} className="justify-between">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn bg-slate-800 text-lg text-white font-semibold "
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div>
                  <FaRegCircleUser className="text-4xl bg-slate-100 p-2  rounded-full" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 p-2 shadow space-y-2"
              >
                <li>
                  <Link
                    to="/login"
                    className="btn bg-slate-800 text-base text-white font-bold "
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="btn bg-slate-800 text-base text-white font-bold "
                  >
                    Create An Account
                  </Link>
                </li>

                {/* <li>
                  <Link
                    to={"/dashboard"}
                    className="btn bg-[#9538E2] text-base text-white font-bold"
                  >
                    Admin Dashboard
                  </Link>
                </li> */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

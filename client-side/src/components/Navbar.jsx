import { useContext, useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/hansyeaggy-logo.png";
import { AuthContext } from "../authprovider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const [cartLength, setCartLength] = useState(0);
  useEffect(() => {
    const load = async () => {
      const carts = await getAllCarts();
      const wishlists = await getAllWishlists();

      // setWishlists(wishlists);
      setCartLength(carts.length);
      // setWishlist(wishlists.length);
    };
    load();
  }, []);

  return (
    <div className="lg:py-5 bg-base-200">
      <div className="navbar backdrop-blur-xl bg-white/30 z-50 fixed top-0">
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
                    isActive ? "text-purple-700" : "hover:text-warning"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-purple-700" : "hover:text-warning"
                  }`
                }
                to="/gallery"
              >
                Gallery
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-purple-700" : "hover:text-warning"
                  }`
                }
                to="/bio"
              >
                Bio
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-purple-700" : "hover:text-warning"
                  }`
                }
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-purple-700" : "hover:text-warning"
                  }`
                }
                to="/shop"
              >
                Shop
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-purple-700" : "hover:text-warning"
                  }`
                }
                to="/cart"
              >
                cart
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-purple-700" : "hover:text-warning"
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
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-purple-700 bg-white px-3 py-2 rounded-xl"
                    : "hover:text-purple-700"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-purple-700  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-purple-700"
                }`
              }
              to="/gallery"
            >
              Gallery
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-purple-700  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-purple-700"
                }`
              }
              to="/bio"
            >
              Bio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-purple-700  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-purple-500"
                }`
              }
              to="/contact"
            >
              Contact
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-purple-500  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-purple-500"
                }`
              }
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-purple-500 bg-white px-3 py-2 rounded-xl"
                    : "hover:text-purple-500"
                }`
              }
              to="/cart"
            >
              Shopping Cart
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-purple-500 bg-white px-3 py-2 rounded-xl"
                    : "hover:text-purple-700"
                }`
              }
              to="/faq"
            >
              FAQ
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-5">
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
                  {cartLength}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <Link to="/cart" className="btn btn-primary btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <FiHeart className="text-4xl bg-zinc-200 p-2 rounded-full">
              {" "}
            </FiHeart>
            <span className="relative -top-12 -right-8 bg-white text-lg font-bold p-1 rounded-full">
              0
            </span>
          </div>
          {/* <div>
            <Link
              to="/login"
              className="btn bg-[#9538E2] text-lg text-white font-bold "
            >
              Create an Account
            </Link>
          </div> */}

          {/* New Navbar start */}
          {/* <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div> */}

          {/* New Navbar End */}

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn bg-[#9538E2] text-xl text-white font-bold "
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/register">
              <button className="btn bg-[#9538E2] text-xl text-white font-bold ">
                Create an Account
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

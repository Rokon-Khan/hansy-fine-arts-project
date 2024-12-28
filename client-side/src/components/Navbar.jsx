import { useContext, useEffect } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/hansyeaggy-logo.png";
import { AuthContext } from "../authprovider/AuthProvider";
import { useCart } from "../cartprovider/CartContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
  useEffect(() => {
    const load = async () => {
      const carts = await getAllCarts();
      const wishlists = await getAllWishlists();
      // setCartLength(carts.length);
    };
    load();
  }, []);

  return (
    <div className="lg:py-5 py-4 bg-base-200">
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
                    className="btn bg-[#9538E2] text-white btn-block"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <FiHeart className="text-4xl bg-zinc-200 p-2 rounded-full">
              {" "}
            </FiHeart>
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
                    className="btn bg-[#9538E2] text-lg text-white font-semibold "
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
                    className="btn bg-[#9538E2] text-base text-white font-bold "
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="btn bg-[#9538E2] text-base text-white font-bold "
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

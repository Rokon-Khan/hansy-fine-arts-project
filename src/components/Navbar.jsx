// import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/logo3.png";
// import { AuthContext } from "../authprovider/AuthProvider";

const Navbar = () => {
  // const { user, logOut } = useContext(AuthContext);

  //   const handleLogOut = () => {
  //     logOut().then().catch();
  //   };

  return (
    <div className=" lg:px-10 lg:py-5 bg-base-200">
      <div className="navbar ">
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
                    isActive ? "text-green-500" : "hover:text-warning"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-green-500" : "hover:text-warning"
                  }`
                }
                to="/donation-campaign"
              >
                Gallery
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-green-500" : "hover:text-warning"
                  }`
                }
                to="/Dashboard"
              >
                Dasboard
              </NavLink>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost font-bold text-2xl lg:flex hidden"
          >
            Hans_Yaggy
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-6 text-xl px-1 gap-6">
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-green-500 bg-white px-3 py-2 rounded-xl"
                    : "hover:text-green-500"
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
                    ? "text-green-500  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-green-500"
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
                    ? "text-green-500  bg-white px-3 py-2 rounded-xl"
                    : "hover:text-green-500"
                }`
              }
              to="/how-to-help"
            >
              How To Fund
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "text-green-500 bg-white px-3 py-2 rounded-xl"
                    : "hover:text-green-500"
                }`
              }
              to="/Dashboard"
            >
              Dasboard
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <div>
            <Link
              to="/login"
              className="btn bg-green-400 text-xl text-white font-bold "
            >
              Login
            </Link>
          </div>
          {/* {user ? (
            <button
              //   onClick={handleLogOut}
              className="btn bg-green-400 text-xl text-white font-bold "
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn bg-green-400 text-xl text-white font-bold ">
                Login
              </button>
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

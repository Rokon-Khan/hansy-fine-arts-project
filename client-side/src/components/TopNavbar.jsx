import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo from "../assets/hansyeaggy-logo.png";

const TopNavbar = () => {
  return (
    <>
      <div className="sm:flex sm:justify-between items-center justify-center py-4 px-6  border-b border-gray-200 ">
        <div className="flex items-center justify-center space-x-4 mb-2">
          <span className="text-sm text-gray-600">Follow Us:</span>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaInstagram className="text-2xl text-[#b09f7b]" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaFacebookF className="text-2xl text-[#b09f7b]" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaTwitter className="text-2xl text-[#b09f7b]" />
          </a>
        </div>
        {/* <div className="text-center">
        <span className="text-2xl font-bold border-2 border-l-[#1a1815] border-t-[#1a1815]  border-b-[#1a1815]">
          art
        </span>
        <span className="text-2xl font-light border-2 border-t-[#b09f7b] border-b-[#b09f7b] border-r-[#b09f7b]">
          gallery
        </span>
        <div className="text-sm tracking-wide text-gray-500">
          CREATIVE FUTURE
        </div>
        <Link to="/" className="lg:flex hidden">
          <img className="max-w-[150px] max-h-[150px]" src={logo} alt="" />
        </Link>
      </div> */}
        <div className="flex items-center justify-center space-x-2">
          <FaPhoneAlt className="text-2xl text-[#b09f7b]" />
          <span className="text-gray-600">+1 (409) 987-5874</span>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;

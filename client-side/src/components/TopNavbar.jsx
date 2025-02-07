import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import logo from "../assets/hansyeaggy-logo.png";

const TopNavbar = () => {
  return (
    <div className="max-w-11/2 flex justify-between items-center py-4 px-6 border-b border-gray-200 mx-auto">
      <div className="flex items-center space-x-4">
        <span className="text-lg font-bold text-slate-800">Follow Us:</span>
        <a href="http://www.instagram.com/@YaeggyArt" target="_blank">
          <FaInstagram className="text-2xl text-[#b09f7b] hover:text-[#e9c475]" />
        </a>
        <a href="http://www.facebook.com/YaeggyArt" target="_blank">
          <FaFacebookF className="text-2xl text-[#b09f7b] hover:text-[#e9c475]" />
        </a>
        <a href="http://www.youtube.com/@YaeggyArt" target="_blank">
          <IoLogoYoutube className="text-2xl text-[#b09f7b] hover:text-[#e9c475]" />
        </a>
        <a
          href="https://www.tiktok.com/@yaeggyart?_t=ZT-8sMIBRUmk2s&_r=1"
          target="_blank"
        >
          <FaTiktok className="text-2xl text-[#b09f7b] hover:text-[#e9c475]" />
        </a>
      </div>
      <div className="text-center">
        {/* <span className="text-2xl font-bold border-2 border-l-[#1a1815] border-t-[#1a1815]  border-b-[#1a1815]">
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
        {/* <div className="flex items-center justify-center space-x-2">
          <FaPhoneAlt className="text-2xl text-[#b09f7b]" />
          <span className="text-gray-600">+1 (409) 987-5874</span>
        </div> */}
      </div>
      <div className="flex items-center space-x-2">
        <FaPhoneAlt className="text-2xl text-[#b09f7b] hover:text-[#e9c475]" />
        <span className="text-slate-800 font-bold">+1 (409) 987-5874</span>
      </div>
    </div>
  );
};

export default TopNavbar;

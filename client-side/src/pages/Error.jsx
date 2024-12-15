import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import error from "../assets/404.gif";
const Error = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <div className="max-w-[1024px] h-full mx-auto">
        <img className="w-ful h-full" src={error} alt="error" />
      </div>
      <div>
        <Link
          to="/"
          className="btn bg-[#9538E2] text-white tex-xl font-bold hover:text-[#00be6c]"
        >
          {" "}
          <FaArrowLeftLong /> Return Home
        </Link>
      </div>
    </div>
  );
};

export default Error;

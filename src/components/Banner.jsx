import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="hero min-h-screen bg-banner">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-[990px]">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Hansyaeggy</h1>
            <p className="mb-5">
              Explore the world from a new perspective, through the eyes of a
              pilot who turns each flight into a work of art.
            </p>
            <Link
              to="/gallery"
              className="btn outline outline-white outline-offset-2  text-xl text-white bg-[#9538E2]"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

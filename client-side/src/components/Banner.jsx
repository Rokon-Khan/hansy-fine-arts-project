const Banner = () => {
  return (
    <>
      <div className="max-w-7xl lg:min-h-screen min-h-[600px] bg-banner_1 bg-cover bg-no-repeat mx-auto">
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-[990px]">
            {/* <h1 className="mb-5 lg:text-6xl text-3xl text-white font-semibold font-yesterYear">
              Welcome to Hansyaeggy
            </h1> */}
            {/* <h2 className="mb-5 lg:text-4xl text-3xl text-white font-semibold max-w-lg ">
              Let&apos;s configure your own print product
            </h2> */}
            {/* <Link
              to="/custom-art"
              className="btn  text-xl text-white bg-[#b09f7b]"
            >
              Upload Your Art
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

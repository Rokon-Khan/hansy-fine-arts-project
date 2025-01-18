const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto my-10 p-5 my-10">
      <div className="w-full lg:w-1/2 relative">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7UCWJEzAcig?si=4vr55KfqY26hLJ7b"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="bg-white bg-opacity-75 rounded-full p-4 focus:outline-none"
            aria-label="Play Video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-4.586-2.65A1 1 0 009 9.418v5.164a1 1 0 001.166.982l4.586-1.627a1 1 0 000-1.8z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-10">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600 mb-4">
          Manchester Art Gallery is one of the country's finest art museums
          welcoming over half a million visitors each year.
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-yellow-600">Weekdays:</span>{" "}
          8:00-20:00
          <span className="ml-4 font-bold text-yellow-600">Weekends:</span>{" "}
          9:00-18:00
        </p>
        <button className="mt-6 px-6 py-2 border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition rounded">
          buy tickets
        </button>
      </div>
    </div>
  );
};

export default AboutUs;

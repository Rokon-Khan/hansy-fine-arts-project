const ArtMarketingConsulting = () => {
  return (
    <div className="bg-white py-12 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-600 uppercase">
          Art Marketing Consulting
        </h2>
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900">
          A Marketing Plan Based on What is Working Right Now,
          <br />
          Backed by Ongoing Consulting & Support
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-gray-100 p-4">
            <svg
              className="h-12 w-12 text-gray-600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-4 18a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-medium text-gray-900">
            365-day Art Marketing Plan
          </h3>
          <p className="mt-2 text-base text-gray-600">
            What to post on social media, when to send emails, how to execute a
            holiday sale — we show you what to do every single day of the year.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-full bg-gray-100 p-4">
            <svg
              className="h-12 w-12 text-gray-600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.553 2.276A2 2 0 0120 14.105V15a2 2 0 01-2 2H6a2 2 0 01-2-2v-.895a2 2 0 01.447-1.829L9 10m3-7l-4 16m4-16l4 16m-4-16v16"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-medium text-gray-900">
            A Ton of Work Done For You
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Pre-made templates for social media, email marketing, and more all
            with pre-written content based on what is working right now.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-full bg-gray-100 p-4">
            <svg
              className="h-12 w-12 text-gray-600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10V7a4 4 0 00-8 0v3M5 10h14M17 10a2 2 0 11-4 0m-6 0a2 2 0 114 0m-4 5h4m2 0h2m2 0h2"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-medium text-gray-900">
            One-on-One Consulting
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Weekly live video workshops where you can verbally ask any questions
            and get the help you need to keep your business moving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtMarketingConsulting;

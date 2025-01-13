const PrintOnDemandFeatures = () => {
  return (
    <div className="bg-white py-12 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-600 uppercase">
          Print-On-Demand
        </h2>
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900">
          Automated Fine Art Print Fulfillment
          <br />
          (The Way it Should Be)
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
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
                d="M12 8c-1.38 0-2.74.56-3.76 1.64L3 16.39l7.64-1.47c1.08-1.02 1.64-2.38 1.64-3.76z"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-medium text-gray-900">
            World-Class Fine Art
          </h3>
          <p className="mt-2 text-base text-gray-600">
            First-class fine art print quality on archival-certified paper,
            canvas, metal, acrylic and more
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
                d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14v6"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h4"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-medium text-gray-900">
            Merchandise
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Calendars, puzzles, coasters, t-shirts, totes, bags, phone cases,
            mugs, and more
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
                d="M12 4.354a4 4 0 010 7.292"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354l-8-8"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-medium text-gray-900">
            Exclusive Pricing & Discounts
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Our negotiation process gets you better pricing on printing and
            shipping from world-class vendors
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
                d="M17 16l4-4m0 0l-4-4m4 4H3"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-medium text-gray-900">
            First-Class Service
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Your orders arrive in style with your logo on the packaging. Print
            or shipping issues? We’ll handle it
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrintOnDemandFeatures;

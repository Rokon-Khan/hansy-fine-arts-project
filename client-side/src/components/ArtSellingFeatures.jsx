import { FaHandHoldingUsd, FaUsers } from "react-icons/fa";
import { MdOutlineCollections, MdOutlineManageHistory } from "react-icons/md";
const ArtSellingFeatures = () => {
  return (
    <div className="bg-white py-12 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-600 uppercase">
          Web Presence
        </h2>
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900">
          An Art-Selling Website Proven to Sell More Art Online
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-gray-100 p-4">
            <FaHandHoldingUsd className="text-5xl" />
          </div>
          <h3 className="mt-4 text-xl font-medium text-gray-900">
            Industry-leading Features
          </h3>
          <p className="mt-2 text-base text-gray-600">
            More art-selling features and functionality than any website on the
            planet
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-full bg-gray-100 p-4">
            <FaUsers className="text-5xl" />
          </div>
          <h3 className="mt-4 text-xl font-medium text-gray-900">
            Higher Conversion Rates
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Convert the maximum amount of your visitors into buyers
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-full bg-gray-100 p-4">
            <MdOutlineCollections className="text-5xl" />
          </div>
          <h3 className="mt-4 text-xl font-medium text-gray-900">
            Happier Collectors
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Provide your customers with the finest art buying experience
            available
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-full bg-gray-100 p-4">
            <MdOutlineManageHistory className="text-5xl" />
          </div>
          <h3 className="mt-4 text-xl font-medium text-gray-900">
            Constantly Updated
          </h3>
          <p className="mt-2 text-base text-gray-600">
            Never-ending feature releases and upgrades to help you sell more art
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtSellingFeatures;

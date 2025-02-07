import banner from "../assets/gallery-banner.jpg";
import ArtCommissionAgreement from "../components/ArtCommissionAgreement";
import CustomPortraitAgreement from "../components/CustomPortraitAgreement";
import PortraitCarousel from "../components/PortraitCarousel";
const CustomPortrait = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <img
            src={banner} // Replace with your image URL
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-white text-center py-10">
          <h1 className="text-4xl font-bold tracking-widest">
            HANS YAEGGY FINE ART
          </h1>
          <p className="text-lg italic mt-2">custom portrait</p>
        </div>
        {/* <nav className="relative z-10">
        <ul className="flex justify-center space-x-10 text-white uppercase text-lg font-semibold">
          <li className="hover:text-gray-300">Home Page</li>
          <li className="hover:text-gray-300">About Us</li>
          <li className="text-red-500">Gallery</li>
          <li className="hover:text-gray-300">Blog</li>
          <li className="hover:text-gray-300">Contacts</li>
        </ul>
      </nav> */}
      </div>

      <div className="max-w-7xl mx-auto my-10 grid lg:grid-cols-2 grid-cols-1 gap-50">
        {/* <Slider></Slider> */}
        {/* <PhotoCarousel></PhotoCarousel> */}
        <PortraitCarousel />
        <div>
          <CustomPortraitAgreement></CustomPortraitAgreement>
          <ArtCommissionAgreement></ArtCommissionAgreement>
        </div>
      </div>
    </div>
  );
};

export default CustomPortrait;

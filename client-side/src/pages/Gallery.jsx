import MasonaryGrid from "../components/MasonaryGrid";

const Gallery = () => {
  return (
    <div>
      <div>
        <div className="w-full h-[250px] bg-[#9538E2] text-center text-white space-y-3  py-6">
          <h2 className="text-3xl font-bold">The Elegant Watercolor Gallery</h2>
          <p className=" max-w-[796px] mx-auto">
            Explore the elegant gallery images experience to the next level.
            Choose the beautiful potrait for your home decoration and office.
          </p>
        </div>
      </div>
      <MasonaryGrid></MasonaryGrid>
    </div>
  );
};

export default Gallery;

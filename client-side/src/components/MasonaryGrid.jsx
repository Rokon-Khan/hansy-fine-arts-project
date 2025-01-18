import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const images = [
  "./cuadro-vertical-1.jpg",
  "./cuadro-vertical-2.jpg",
  "./cuadro-horizontal-1.jpg",
  "./cuadro-vertical-3.jpg",
  "./cuadro-horizontal-2.jpg",
  "./cuadro-vertical-4.jpg",
  "./cuadro-horizontal-3.jpg",
  "./cuadro-horizontal-4.jpg",
  "./cuadro-horizontal-5.jpg",
];

const MasonaryGrid = () => {
  // { productItem }
  // const { _id, productTitle, productImage } = productItem || {};

  return (
    <>
      <div className="max-w-[1140px] mx-auto mt-10">
        <h2 className="text-3xl font-bold">Works of Artists</h2>
      </div>
      <div className="max-w-[1140px] columns-1 sm:columns-2  lg:columns-3 py-10 md:py-20 gap-4 mx-auto">
        {/* <div className=" mb-4 break-inside-avoid transition hover:scale-105 shadow-xl ">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={productImage}
            alt=""
          />
        </div> */}
        <PhotoProvider>
          {images.map((src, idx) => (
            <div className="mb-4 break-inside-avoid " key={idx}>
              <PhotoView src={src}>
                <img
                  className="w-full h-auto object-cover rounded-lg  cursor-pointer hover:transition-transform"
                  src={src}
                  alt=""
                />
              </PhotoView>
            </div>
          ))}
        </PhotoProvider>
      </div>
    </>
  );
};

export default MasonaryGrid;

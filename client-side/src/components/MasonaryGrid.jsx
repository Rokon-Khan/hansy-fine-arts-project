// const images = [
//   "./cuadro-vertical-1.jpg",
//   "./cuadro-vertical-2.jpg",
//   "./cuadro-horizontal-1.jpg",
//   "./cuadro-vertical-3.jpg",
//   "./cuadro-horizontal-2.jpg",
//   "./cuadro-vertical-4.jpg",
//   "./cuadro-horizontal-3.jpg",
//   "./cuadro-horizontal-4.jpg",
//   "./cuadro-horizontal-5.jpg",
// ];

const MasonaryGrid = ({ productItem }) => {
  const { _id, productTitle, productImage } = productItem || {};

  return (
    <>
      <div className="max-w-[1140px] columns-1 sm:columns-2  lg:columns-3 py-10 md:py-20 gap-4 mx-auto">
        <div className=" mb-4 break-inside-avoid transition hover:scale-105 shadow-xl ">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={productImage}
            alt=""
          />
        </div>
        {/* {product.map((src, idx) => (
          <div className="mb-4 break-inside-avoid " key={idx}>
            <img
              className="w-full h-auto object-cover rounded-lg"
              src={productImage}
              alt=""
            />
          </div>
        ))} */}
      </div>
    </>
  );
};

export default MasonaryGrid;

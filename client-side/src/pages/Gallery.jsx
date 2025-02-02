import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import NewNavbar from "../components/NewNavbar";
import ShopArtCategory from "../components/ShopArtCategory";
// import Slider from "../components/Slider";

const Gallery = () => {
  const data = useLoaderData();
  console.log(data);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(data);
  }, [data]);

  return (
    <div>
      <NewNavbar></NewNavbar>
      {/* <div className="grid lg:grid-cols-2 mt-20 max-w-7xl mx-auto gap-10">
        <div className="flex flex-col gap-5">
          <button className="btn text-black">Portraits</button>
          <button className="btn text-black">Contemporary</button>
        </div>
        <div>
          <Slider></Slider>
          <button className="btn bg-slate-200 text-black">
            Become a Member
          </button>
        </div>
      </div> */}

      {/* <NewGallery data={data}></NewGallery> */}
      <ShopArtCategory></ShopArtCategory>

      <div className="max-w-[1140px] columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4 mx-auto">
        {product.map((productItem) => (
          <Link
            to={`/product-detail/${productItem._id}`} // Correctly using the productItem._id
            key={productItem._id} // Moving key to the Link element
          >
            <div className="mb-4 break-inside-avoid transition hover:scale-105 shadow-xl">
              <img
                className="w-full h-auto object-cover rounded-lg"
                src={productItem.image}
                alt={productItem.productTitle}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

// import { Autoplay, Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// // import "swiper/css/autoplay";
// import "swiper/css/navigation";
// import Card from "./Card";

// const Slider = () => {
//   return (
//     <div className="mb-10">
//       <Swiper
//         // install Swiper modules
//         modules={[Navigation, Autoplay]}
//         spaceBetween={500}
//         slidesPerView={2}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ autoplay: true }}
//       >
//         <SwiperSlide>
//           <Card></Card>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Card></Card>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Card></Card>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;

import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCard from "./SwiperCard";

const Slider = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/arts`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="mb-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <SwiperCard
              _id={product._id}
              image={product.image}
              className="w-full h-auto"
              // Replace with the actual key for the image URL
              // productTitle={product.productTitle} // Replace with the actual key for the product title
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

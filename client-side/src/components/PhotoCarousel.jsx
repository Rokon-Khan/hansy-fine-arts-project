import axios from "axios";
import { useEffect, useState } from "react";

const PhotoCarousel = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch products on component mount
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/products`
      );
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const selectSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-xl mx-auto">
      {/* Main Image */}
      {products.length > 0 && (
        <div className="relative">
          <img
            src={products[currentIndex].productImage}
            alt={`Slide ${currentIndex}`}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          {/* Left Arrow */}
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
            onClick={prevSlide}
          >
            &#8249;
          </button>
          {/* Right Arrow */}
          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
            onClick={nextSlide}
          >
            &#8250;
          </button>
        </div>
      )}

      {/* Thumbnail Navigation */}
      <div className="flex justify-center mt-4 gap-2">
        {products.map((product, index) => (
          <button
            key={product._id}
            onClick={() => selectSlide(index)}
            className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
              currentIndex === index ? "border-blue-500" : "border-transparent"
            }`}
          >
            <img
              src={product.productImage}
              alt={`Thumbnail ${index}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;

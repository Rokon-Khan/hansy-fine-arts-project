import { useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const prices = {
  Paintings: [
    {
      type: "Canvas/Acrylic",
      price: "from $95",
      description:
        "Acrylic paintings are the most popular among our artists, their clients, and our gallery visitors. This type of paintings is safe for your health and is less affected by heat, while expressing a vast range of colours.",
    },
    {
      type: "Canvas/Oil",
      price: "from $55",
      description:
        "Being a basic painting material for artists since ancient times, oil provides great possibilities even today. Its transparency, opacity, and translucency allow to create the most captivating color fusions.",
    },
    {
      type: "Canvas/Mixed Technique",
      price: "from $15",
      description:
        "A mixed media painting is one which combines different painting and drawing materials and methods, rather than only one medium. Such artworks are becoming more popular due to artists’ intense creativity.",
    },
  ],
  "Graphic Arts": [
    {
      type: "Paper/Ink",
      price: "from $35",
      description:
        "Drawings in ink have been amazingly popular during the twentieth century and today they serve as the #1 decoration for homes and offices whose owners can’t afford big or full-colored paintings.",
    },
    {
      type: "Paper/Watercolor",
      price: "from $28",
      description:
        "Watercolor is the #1 painting technique we were taught at school. With the development of equipment and supplies for painting, this genre has become more varied than any other type of paintings.",
    },
    {
      type: "Paper/Pencil",
      price: "from $21",
      description:
        "Nowadays, pencil is used not only in making sketches for future paintings but also for creating absolutely spectacular artworks that compliment any interior or art collection.",
    },
  ], // Add data here if available
  Sculptures: [
    {
      type: "Canvas/Acrylic",
      price: "from $95",
      description:
        "Acrylic paintings are the most popular among our artists, their clients, and our gallery visitors. This type of paintings is safe for your health and is less affected by heat, while expressing a vast range of colours.",
    },
    {
      type: "Canvas/Oil",
      price: "from $55",
      description:
        "Being a basic painting material for artists since ancient times, oil provides great possibilities even today. Its transparency, opacity, and translucency allow to create the most captivating color fusions.",
    },
    {
      type: "Canvas/Mixed Technique",
      price: "from $15",
      description:
        "A mixed media painting is one which combines different painting and drawing materials and methods, rather than only one medium. Such artworks are becoming more popular due to artists’ intense creativity.",
    },
  ], // Add data here if available
};

const testimonials = [
  {
    name: "Anna Brown",
    occupation: "Programmer",
    image: "https://i.ibb.co.com/hX6WftZ/testimonials-1.jpg",
    testimonial:
      "My friend is an art connoisseur, so she brought me here and I’m amazed. I got to see so many different types of beautiful art in one place, so I’m thrilled and I feel like Art Gallery helps me develop my taste for art. I think it’s nice that there’s a big range of prices and I’m considering buying a painting here.",
  },
  {
    name: "John Doe",
    occupation: "Artist",
    image: "https://i.ibb.co.com/VLmj7ZN/testimonials-2.jpg",
    testimonial:
      "Amazing collection and very helpful staff. I found a lot of inspiration here and would recommend it to any art enthusiast.",
  },
  {
    name: "Jane Smith",
    occupation: "Designer",
    image: "https://i.ibb.co.com/Xjv4pjg/testimonials-4.jpg",
    testimonial:
      "A wonderful experience with such a variety of artworks. The atmosphere is great and I enjoyed my visit thoroughly.",
  },
];

function PricingTestimonials() {
  const [selectedCategory, setSelectedCategory] = useState("Paintings");
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[0]
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Prices Section */}
        <div className="w-full md:w-1/2 bg-zinc-100 p-6">
          <h2 className="text-2xl font-bold mb-4">Our Prices</h2>
          <div className="flex space-x-4 mb-4">
            {Object.keys(prices).map((category) => (
              <button
                key={category}
                className={`py-2 px-4 rounded ${
                  selectedCategory === category
                    ? "bg-[#b09f7b] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div>
            {prices[selectedCategory].map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center my-4">
                  <h3 className="text-xl font-semibold">{item.type}</h3>
                  <p className="text-gray-900 text-xl font-semibold">
                    {item.price}
                  </p>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 bg-zinc-100 p-6">
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          <div className="flex gap-4">
            <div className="w-3/4 pl-4">
              <blockquote className="text-lg italic">
                <RiDoubleQuotesL className="text-5xl text-[#b09f7b]" />

                {selectedTestimonial.testimonial}
              </blockquote>
              <p className="mt-2 font-bold">{selectedTestimonial.name}</p>
              <p className="text-sm text-gray-500">
                {selectedTestimonial.occupation}
              </p>
            </div>
            <div className="w-1/4 bg-slate-200 flex lg:flex-col items-center">
              {testimonials.map((testimonial, index) => (
                <img
                  key={index}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`cursor-pointer rounded-full border-2 ${
                    selectedTestimonial.name === testimonial.name
                      ? "border-[#b09f7b] border-4"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedTestimonial(testimonial)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingTestimonials;

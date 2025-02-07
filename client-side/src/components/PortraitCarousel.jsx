import { useQuery } from "@tanstack/react-query";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PortraitCarousel = () => {
  const fetchArts = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/arts`);
    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }
    return response.json();
  };

  const {
    data: arts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["arts"],
    queryFn: fetchArts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Filter only portrait images
  const portraitImages = arts.filter((art) => art.category === "portrait");

  return (
    <div>
      <Carousel>
        {portraitImages.map((art) => (
          <div className="max-h-[500px]" key={art._id}>
            <img className="h-fit" src={art.image} alt="Portrait Art" />
            {/* <p className="legend">{art.title || "Untitled"}</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PortraitCarousel;

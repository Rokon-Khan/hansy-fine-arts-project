import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import LoadingSpinner from "./Shared/LoadingSpinner";

const fetchArts = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/arts`);
  return data;
};

const AbstractArtGallery = () => {
  const {
    data: arts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["arts"],
    queryFn: fetchArts,
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Error loading data.</p>;

  return (
    <div className="max-w-7xl grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 mx-auto">
      {arts
        ?.filter((art) => art.category === "abstract") // Filter "abstract" category
        .map((art) => (
          <CategoryCard key={art._id} art={art} />
        ))}
    </div>
  );
};

export default AbstractArtGallery;

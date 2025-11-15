import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import ProductModal from "./ProductModal";

const fetchFileImages = async () => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/image-file-manager`,
    {
      library: {
        name: "inventory",
        session_id: "123456789",
        account_key: "dc9e5410-0107-441a-92eb-6a4fd1c34c79",
        site_id: 2,
      },
      search_filter: "",
      guid_filter: null,
      page_number: 1,
      per_page: 10,
      sort_field: "id",
      sort_direction: "DESC",
      upload_date_from: null,
      upload_date_to: null,
      list_products: true,
      active: null,
    }
  );
  return data.images;
};

export default function FileImageFormFineWork() {
  // State Management

  // Fetching Data
  const {
    data: images,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["fileImages"],
    queryFn: fetchFileImages,
  });

  console.log(images);

  const [selectedImage, setSelectedImage] = useState(null);

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center">Failed to load images</div>;

  // Event Handlers

  // Render
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images?.map((image) => (
          <div
            key={image.guid}
            className="card w-full bg-base-100 shadow-xl cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <figure>
              <img
                src={image.public_preview_uri}
                alt={image.title}
                className="w-full h-auto object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{image.title}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
        {selectedImage && (
          <ProductModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </div>
  );
}

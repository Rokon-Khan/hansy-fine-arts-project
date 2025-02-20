import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

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

const fetchProductTypes = async () => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/products/product-type`,
    { ids: [] }
  );
  return data.product_types;
};

const fetchMediaTypes = async (productType) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/products/media-type`,
    { ids: [productType] }
  );
  return data;
};

const fetchFrames = async (mediaType) => {
  const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/frames`, {
    mediaType,
  });
  return data.collections;
};

const fetchStyleType = async () => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/style-type`
  );
  return data.collections;
};

export default function FileImageFormFineWork() {
  // State Management
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProductType, setSelectedProductType] = useState(null);
  const [selectedMediaType, setSelectedMediaType] = useState(null);

  // Fetching Data
  const {
    data: images,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["fileImages"],
    queryFn: fetchFileImages,
    staleTime: 1000 * 60 * 5,
  });

  const { data: productTypes } = useQuery({
    queryKey: ["productTypes"],
    queryFn: fetchProductTypes,
    staleTime: 1000 * 60 * 10,
  });

  const { data: mediaTypes } = useQuery({
    queryKey: ["mediaTypes", selectedProductType],
    queryFn: () => fetchMediaTypes(selectedProductType),
    enabled: !!selectedProductType,
    staleTime: 1000 * 60 * 5,
  });

  const { data: framesData } = useQuery({
    queryKey: ["frames", selectedMediaType],
    queryFn: () => fetchFrames(selectedMediaType),
    enabled: !!selectedMediaType,
    staleTime: 1000 * 60 * 5,
  });

  const { data: styleTypes } = useQuery({
    queryKey: ["styleTypes"],
    queryFn: fetchStyleType,
    enabled: !!selectedMediaType,
    staleTime: 1000 * 60 * 10,
  });

  console.log(styleTypes, "style types");

  // Event Handlers
  const handleProductTypeChange = (e) => {
    const selectedId = e.target.value;
    setSelectedProductType(selectedId);
    setSelectedMediaType(null); // Reset Media Type when Product Type changes
  };

  const handleMediaTypeChange = (e) => {
    const selectedId = e.target.value;
    setSelectedMediaType(selectedId);
  };

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
      </div>

      {selectedImage && (
        <div className="modal modal-open">
          <div className="modal-box w-4/5 max-w-4xl flex flex-col md:flex-row gap-6">
            <img
              src={selectedImage.public_preview_uri}
              alt={selectedImage.title}
              className="w-full md:w-1/2 object-cover rounded"
            />
            <div className="md:w-1/2">
              <h3 className="text-lg font-bold mb-2">{selectedImage.title}</h3>
              <p className="mb-4">{selectedImage.description}</p>

              <select
                className="select select-bordered w-full mb-4"
                onChange={handleProductTypeChange}
                value={selectedProductType || ""}
              >
                <option value="" disabled>
                  Select Product Type
                </option>
                {productTypes?.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>

              {selectedProductType && (
                <select
                  className="select select-bordered w-full mb-4"
                  onChange={handleMediaTypeChange}
                  value={selectedMediaType || ""}
                >
                  <option value="" disabled>
                    Select Media Type
                  </option>
                  {mediaTypes?.map((media) => (
                    <option key={media.id} value={media.id}>
                      {media.name}
                    </option>
                  ))}
                </select>
              )}

              {selectedMediaType && (
                <div className="h-72 border overflow-scroll">
                  <h3 className="text-lg font-bold mb-2">Select Frame</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {framesData?.map((collection) => (
                      <div
                        key={collection.id}
                        className="card cursor-pointer shadow-lg"
                        onClick={() =>
                          console.log("Selected Frame:", collection)
                        }
                      >
                        <img
                          src={collection.icon_url_1}
                          alt={collection.name}
                          className="w-full h-auto object-cover rounded"
                        />
                        <div className="p-2 text-center">{collection.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal-action">
                <button className="btn" onClick={() => setSelectedImage(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

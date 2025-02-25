import React, { useEffect, useState } from "react";

const ProductModal = ({ image, onClose }) => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedMedia, setSelectedMedia] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("");
  const [selectedFrame, setSelectedFrame] = useState("");
  const [selectedBaseMat, setSelectedBaseMat] = useState("");
  const [selectedGlazing, setSelectedGlazing] = useState("");
  const [selectedImage, setSelectedImage] = useState(image?.public_preview_uri);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Function to get unique values for a specific label key
  const getUniqueValues = (key, products) => {
    const values = new Set();
    products.forEach((product) => {
      product.labels.forEach((label) => {
        if (label.key === key) values.add(label.value);
      });
    });
    return Array.from(values);
  };

  // Get available options dynamically based on previous selections
  const allTypes = getUniqueValues("type", image?.products || []);
  const allMedia = selectedType
    ? getUniqueValues("media", filteredProducts)
    : [];
  const allStyles = selectedMedia
    ? getUniqueValues("style", filteredProducts)
    : [];
  const allCollections = selectedStyle
    ? getUniqueValues("collection", filteredProducts)
    : [];
  const allFrames = selectedCollection
    ? getUniqueValues("frame", filteredProducts)
    : [];
  const allBaseMats = selectedFrame
    ? getUniqueValues("base mat", filteredProducts)
    : [];
  const allGlazings = selectedBaseMat
    ? getUniqueValues("glazing", filteredProducts)
    : [];

  // Filter products based on selections
  useEffect(() => {
    let products = image.products;
    const filters = [
      { key: "type", value: selectedType },
      { key: "media", value: selectedMedia },
      { key: "style", value: selectedStyle },
      { key: "collection", value: selectedCollection },
      { key: "frame", value: selectedFrame },
      { key: "base mat", value: selectedBaseMat },
      { key: "glazing", value: selectedGlazing },
    ];

    filters.forEach(({ key, value }) => {
      if (value) {
        products = products.filter((product) =>
          product.labels.some(
            (label) => label.key === key && label.value === value
          )
        );
      }
    });

    setFilteredProducts(products);
    if (products.length > 0) {
      setSelectedImage(products[0]?.image_url_1 || image.public_preview_uri);
    }
  }, [
    selectedType,
    selectedMedia,
    selectedStyle,
    selectedCollection,
    selectedFrame,
    selectedBaseMat,
    selectedGlazing,
    image.products,
  ]);

  // Function to determine when to show "Order Now"
  const shouldShowOrderButton = () => {
    if (!selectedType && allTypes.length > 0) return false;
    if (!selectedMedia && allMedia.length > 0) return false;
    if (!selectedStyle && allStyles.length > 0) return false;
    if (!selectedCollection && allCollections.length > 0) return false;
    if (!selectedFrame && allFrames.length > 0) return false;
    if (!selectedBaseMat && allBaseMats.length > 0) return false;
    if (!selectedGlazing && allGlazings.length > 0) return false;
    return true;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="modal-box w-11/12 max-w-6xl">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 className="text-2xl font-bold">{image.title}</h3>
        <p className="text-gray-600">{image.description}</p>

        <div className="flex justify-center mt-4">
          <img
            src={selectedImage}
            alt={image.title}
            className="w-96 h-96 object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Dropdown Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Type Selection (Only if available) */}
          {allTypes.length > 0 && (
            <div>
              <label className="block text-sm font-bold">Type:</label>
              <select
                className="select select-bordered w-full"
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  setSelectedMedia("");
                  setSelectedStyle("");
                  setSelectedCollection("");
                  setSelectedFrame("");
                  setSelectedBaseMat("");
                  setSelectedGlazing("");
                }}
              >
                <option value="">Select Type</option>
                {allTypes.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Other cascading dropdowns */}
          {selectedType && allMedia.length > 0 && (
            <div>
              <label className="block text-sm font-bold">Media:</label>
              <select
                className="select select-bordered w-full"
                value={selectedMedia}
                onChange={(e) => {
                  setSelectedMedia(e.target.value);
                  setSelectedStyle("");
                  setSelectedCollection("");
                  setSelectedFrame("");
                  setSelectedBaseMat("");
                  setSelectedGlazing("");
                }}
              >
                <option value="">Select Media</option>
                {allMedia.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedMedia && allStyles.length > 0 && (
            <div>
              <label className="block text-sm font-bold">Style:</label>
              <select
                className="select select-bordered w-full"
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
              >
                <option value="">Select Style</option>
                {allStyles.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedStyle && allCollections.length > 0 && (
            <div>
              <label className="block text-sm font-bold">Collection:</label>
              <select
                className="select select-bordered w-full"
                value={selectedCollection}
                onChange={(e) => setSelectedCollection(e.target.value)}
              >
                <option value="">Select Collection</option>
                {allCollections.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedCollection && allFrames.length > 0 && (
            <div>
              <label className="block text-sm font-bold">Frame:</label>
              <select
                className="select select-bordered w-full"
                value={selectedFrame}
                onChange={(e) => setSelectedFrame(e.target.value)}
              >
                <option value="">Select Frame</option>
                {allFrames.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedFrame && allBaseMats.length > 0 && (
            <div>
              <label className="block text-sm font-bold">Base Mat:</label>
              <select
                className="select select-bordered w-full"
                value={selectedBaseMat}
                onChange={(e) => setSelectedBaseMat(e.target.value)}
              >
                <option value="">Select Base Mat</option>
                {allBaseMats.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedBaseMat && allGlazings.length > 0 && (
            <div>
              <label className="block text-sm font-bold">Glazing:</label>
              <select
                className="select select-bordered w-full"
                value={selectedGlazing}
                onChange={(e) => setSelectedGlazing(e.target.value)}
              >
                <option value="">Select Glazing</option>
                {allGlazings.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Order Now Button */}
        {shouldShowOrderButton() && (
          <div className="flex justify-center mt-6">
            <button className="btn btn-primary w-full max-w-xs">
              Order Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;

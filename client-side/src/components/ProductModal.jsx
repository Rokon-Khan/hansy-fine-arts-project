import React, { useEffect, useState } from "react";

const ProductModal = ({ image, onClose }) => {
  console.log(image.products, "images");

  const [selectedType, setSelectedType] = useState("");
  const [selectedMedia, setSelectedMedia] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("");
  const [selectedFrame, setSelectedFrame] = useState("");
  const [selectedBaseMat, setSelectedBaseMat] = useState("");
  const [selectedGlazing, setSelectedGlazing] = useState("");
  const [selectedImage, setSelectedImage] = useState(image?.public_preview_uri);
  const [selectedProducts, setSelectedProducts] = useState(null);

  const getUniqueTypes = () => {
    const types = image.products.map((product) => product.labels[1].value);
    return [...new Set(types)];
  };

  const allTypes = getUniqueTypes();

  console.log(selectedProducts);

  // const getUniqueMedia = () => {
  //   const media = selectedProducts.map((product) => product.labels[2].value);
  //   console.log(media, "media");
  //   return [...new Set(media)];
  // };

  // console.log(getUniqueMedia(), "getUniqueMedia");

  useEffect(() => {
    if (selectedType) {
      const filteredProducts = image.products.filter(
        (product) => product.labels[1].value === selectedType
      );
      console.log(filteredProducts, "filteredProducts");
      setSelectedProducts(filteredProducts);
      setSelectedImage(filteredProducts[0].image_url_1);
    }
  }, [selectedType]);

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

        {/* Type Selection */}
        {allTypes && (
          <div>
            <label className="block text-sm font-bold">Type:</label>
            <select
              className="select select-bordered w-full"
              value={allTypes}
              onChange={(e) => {
                setSelectedType(e.target.value);
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

        <div className="mt-6">
          <h4 className="text-xl font-bold mb-4">Available Products:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {image.products.map((product, index) => (
              <div
                key={product.sku}
                className="card shadow-xl p-4 border rounded-lg"
              >
                {product.image_url_1 && (
                  <div className="mt-4">
                    <img
                      src={product.image_url_1}
                      alt={product.name}
                      className="w-full h-48 object-contain rounded-lg shadow"
                    />
                  </div>
                )}
                <h5 className="text-lg font-bold">{product.name}</h5>
                <p className="text-gray-500">{product.description_short}</p>

                <div className="mt-4">
                  <h4 className="font-bold">Labels:</h4>
                  <ul className="list-disc list-inside">
                    {product.labels
                      .filter((label) => label.key !== "sku")
                      .map((label) => (
                        <li key={label.key}>
                          <strong>{label.key}:</strong> {label.value}
                        </li>
                      ))}
                  </ul>
                </div>

                {product.product_size && (
                  <div className="mt-4">
                    <h4 className="font-bold">Product Size:</h4>
                    <p>Width: {product.product_size.width} inches</p>
                    <p>Height: {product.product_size.height} inches</p>
                  </div>
                )}

                <div className="mt-4">
                  <h4 className="font-bold">Price:</h4>
                  <p className="text-green-600 font-bold">
                    ${product.per_item_price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

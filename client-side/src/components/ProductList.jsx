import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.printedmint.com/v1/products",
          {
            method: "GET",
            headers: {
              Authorization: `${import.meta.env.VITE_Printed_Mint_API_URL}`, // Replace with your API key
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const productsData = await response.json();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.image_url} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

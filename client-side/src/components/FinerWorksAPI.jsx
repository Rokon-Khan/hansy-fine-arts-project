import axios from "axios";
import React, { useState } from "react";

const FinerWorksAPI = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchProductDetails = async () => {
    const url = "https://api.finerworks.com/v3/get_product_details";
    const headers = {
      "Content-Type": "application/json",
      web_api_key: `${import.meta.env.VITE_FINERWORKS_WEB_API_KEY}`,
      app_key: `${import.meta.env.VITE_FINERWORKS_WEB_APP_KEY}`,
    };

    console.log(import.meta.env.VITE_FINERWORKS_WEB_API_KEY);
    console.log(import.meta.env.VITE_FINERWORKS_WEB_APP_KEY);

    // ${import.meta.env.VITE_API_URL}
    const data = [
      { product_order_po: null, product_qty: 3, product_sku: "AP6543P49875" },
      { product_order_po: null, product_qty: 3, product_sku: "AP6543P58353" },
    ];

    try {
      const res = await axios.post(url, data, { headers });
      setResponse(res.data); // Update state with response
    } catch (err) {
      setError(err.message); // Handle errors
    }
  };

  return (
    <div>
      <button onClick={fetchProductDetails}>Get Product Details</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FinerWorksAPI;

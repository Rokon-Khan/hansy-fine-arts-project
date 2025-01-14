import { useState } from "react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address1: "",
    city: "",
    stateCode: "",
    zipPostalCode: "",
    countryCode: "us",
    phone: "",
    productSKU: "",
    productTitle: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      orders: [
        {
          order_po: `PO_${Math.random()
            .toString(36)
            .substr(2, 9)
            .toUpperCase()}`,
          recipient: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            company_name: formData.companyName,
            address_1: formData.address1,
            city: formData.city,
            state_code: formData.stateCode,
            zip_postal_code: formData.zipPostalCode,
            country_code: formData.countryCode,
            phone: formData.phone,
          },
          order_items: [
            {
              product_qty: 1,
              product_sku: formData.productSKU,
              product_title: formData.productTitle,
            },
          ],
          shipping_code: "SD",
          test_mode: true, // Set to false in production
        },
      ],
    };

    try {
      const response = await fetch("/api/submit-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("Order submitted successfully!");
      } else {
        alert("Failed to submit order.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for formData */}
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="address1"
        placeholder="Address"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="stateCode"
        placeholder="State Code"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="zipPostalCode"
        placeholder="Zip Code"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="productSKU"
        placeholder="Product SKU"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="productTitle"
        placeholder="Product Title"
        onChange={handleChange}
        required
      />
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OrderForm;

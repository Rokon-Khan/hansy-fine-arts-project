// import { useState } from "react";

// const OrderForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     companyName: "",
//     address1: "",
//     city: "",
//     stateCode: "",
//     zipPostalCode: "",
//     countryCode: "us",
//     phone: "",
//     productSKU: "",
//     productTitle: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const orderData = {
//       orders: [
//         {
//           order_po: `PO_${Math.random()
//             .toString(36)
//             .substr(2, 9)
//             .toUpperCase()}`,
//           recipient: {
//             first_name: formData.firstName,
//             last_name: formData.lastName,
//             company_name: formData.companyName,
//             address_1: formData.address1,
//             city: formData.city,
//             state_code: formData.stateCode,
//             zip_postal_code: formData.zipPostalCode,
//             country_code: formData.countryCode,
//             phone: formData.phone,
//           },
//           order_items: [
//             {
//               product_qty: 1,
//               product_sku: formData.productSKU,
//               product_title: formData.productTitle,
//             },
//           ],
//           shipping_code: "SD",
//           test_mode: true, // Set to false in production
//         },
//       ],
//     };

//     try {
//       const response = await fetch("/api/submit-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(orderData),
//       });

//       if (response.ok) {
//         alert("Order submitted successfully!");
//       } else {
//         alert("Failed to submit order.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto my-20 p-8 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-6 text-center">Place Your Order</h2>
//       <form onSubmit={handleSubmit}>
//         {[
//           {
//             label: "First Name",
//             name: "firstName",
//             type: "text",
//             required: true,
//           },
//           {
//             label: "Last Name",
//             name: "lastName",
//             type: "text",
//             required: true,
//           },
//           { label: "Company Name", name: "companyName", type: "text" },
//           { label: "Address", name: "address1", type: "text", required: true },
//           { label: "City", name: "city", type: "text", required: true },
//           {
//             label: "State Code",
//             name: "stateCode",
//             type: "text",
//             required: true,
//           },
//           {
//             label: "Zip Code",
//             name: "zipPostalCode",
//             type: "text",
//             required: true,
//           },
//           { label: "Phone", name: "phone", type: "text", required: true },
//           {
//             label: "Product SKU",
//             name: "productSKU",
//             type: "text",
//             required: true,
//           },
//           {
//             label: "Product Title",
//             name: "productTitle",
//             type: "text",
//             required: true,
//           },
//         ].map(({ label, name, type, required }, index) => (
//           <div className="mb-4" key={index}>
//             <label
//               className="block text-gray-700 font-bold mb-2"
//               htmlFor={name}
//             >
//               {label}
//             </label>
//             <input
//               type={type}
//               id={name}
//               name={name}
//               value={formData[name]}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
//               required={required}
//             />
//           </div>
//         ))}
//         <div className="text-center">
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
//           >
//             Submit Order
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default OrderForm;

import { useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const OrderForm = () => {
  const location = useLocation();
  const { productSKU, productTitle } = location.state;
  console.log(productSKU, productTitle);
  // const { SKU, Title } = location.state || {};
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
    productSKU: productSKU || "", // Pre-fill with the passed prop
    productTitle: productTitle || "", // Pre-fill with the passed prop
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
          order_key: null, // Added to match the structure
          recipient: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            company_name: formData.companyName,
            address_1: formData.address1,
            address_2: null, // Defaulting to null
            address_3: null, // Defaulting to null
            city: formData.city,
            state_code: formData.stateCode,
            province: null, // Defaulting to null
            zip_postal_code: formData.zipPostalCode,
            country_code: formData.countryCode,
            phone: formData.phone,
            email: null, // Defaulting to null
            address_order_po: `PO_${Math.random()
              .toString(36)
              .substr(2, 9)
              .toUpperCase()}`, // Optional
          },
          order_items: [
            {
              product_order_po: `PO_${Math.random()
                .toString(36)
                .substr(2, 9)
                .toUpperCase()}`, // Optional
              product_qty: 1,
              product_sku: formData.productSKU,
              product_image: null, // Defaulting to null
              product_title: formData.productTitle,
              template: null, // Defaulting to null
              product_guid: "00000000-0000-0000-0000-000000000000", // Defaulting to a placeholder
              custom_data_1: null, // Defaulting to null
              custom_data_2: null, // Defaulting to null
              custom_data_3: null, // Defaulting to null
            },
          ],
          shipping_code: "SD",
          ship_by_date: null, // Defaulting to null
          customs_tax_info: null, // Defaulting to null
          gift_message: null, // Defaulting to null
          test_mode: true, // Assuming you want to keep this in test mode
          webhook_order_status_url: null, // Defaulting to null
          document_url: null, // Defaulting to null
          acct_number_ups: null, // Defaulting to null
          acct_number_fedex: null, // Defaulting to null
          custom_data_1: null, // Defaulting to null
          custom_data_2: null, // Defaulting to null
          custom_data_3: null, // Defaulting to null
        },
      ],
      validate_only: false, // Assuming this is necessary
    };

    console.log("Order Data:", orderData); // For debugging

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/submit-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Order submitted successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        Swal.fire({
          title: "Error!",
          text: errorData.message || "Failed to submit order.",
          icon: "error",
          confirmButtonText: "Retry",
        });
      }
    } catch (error) {
      console.error("Catch error:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while submitting the order.",
        icon: "error",
        confirmButtonText: "Retry",
      });
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const orderData = {
  //     orders: [
  //       {
  //         order_po: `PO_${Math.random()
  //           .toString(36)
  //           .substr(2, 9)
  //           .toUpperCase()}`,
  //         recipient: {
  //           first_name: formData.firstName,
  //           last_name: formData.lastName,
  //           company_name: formData.companyName,
  //           address_1: formData.address1,
  //           city: formData.city,
  //           state_code: formData.stateCode,
  //           zip_postal_code: formData.zipPostalCode,
  //           country_code: formData.countryCode,
  //           phone: formData.phone,
  //         },
  //         order_items: [
  //           {
  //             product_qty: 1,
  //             product_sku: formData.productSKU,
  //             product_title: formData.productTitle,
  //           },
  //         ],
  //         shipping_code: "SD",
  //         test_mode: true,
  //       },
  //     ],
  //   };

  //   console.log("Order Data:", orderData); // Log the request payload

  //   try {
  //     const response = await fetch(
  //       `${import.meta.env.VITE_API_URL}/api/submit-order`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(orderData),
  //       }
  //     );

  //     if (response.ok) {
  //       Swal.fire({
  //         title: "Success!",
  //         text: "Order submitted successfully!",
  //         icon: "success",
  //         confirmButtonText: "OK",
  //       });
  //     } else {
  //       const errorData = await response.json();
  //       console.error("Error response:", errorData); // Log detailed error response
  //       Swal.fire({
  //         title: "Error!",
  //         text: errorData.message || "Failed to submit order.",
  //         icon: "error",
  //         confirmButtonText: "Retry",
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Catch error:", error); // Log error details
  //     Swal.fire({
  //       title: "Error!",
  //       text: "An error occurred while submitting the order.",
  //       icon: "error",
  //       confirmButtonText: "Retry",
  //     });
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const orderData = {
  //     orders: [
  //       {
  //         order_po: `PO_${Math.random()
  //           .toString(36)
  //           .substr(2, 9)
  //           .toUpperCase()}`,
  //         recipient: {
  //           first_name: formData.firstName,
  //           last_name: formData.lastName,
  //           company_name: formData.companyName,
  //           address_1: formData.address1,
  //           city: formData.city,
  //           state_code: formData.stateCode,
  //           zip_postal_code: formData.zipPostalCode,
  //           country_code: formData.countryCode,
  //           phone: formData.phone,
  //         },
  //         order_items: [
  //           {
  //             product_qty: 1,
  //             product_sku: formData.productSKU,
  //             product_title: formData.productTitle,
  //           },
  //         ],
  //         shipping_code: "SD",
  //         test_mode: true, // Set to false in production
  //       },
  //     ],
  //   };

  //   try {
  //     const response = await fetch(
  //       `${import.meta.env.VITE_API_URL}/api/submit-order`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(orderData),
  //       }
  //     );

  //     if (response.ok) {
  //       Swal.fire({
  //         title: "Success!",
  //         text: "Order submitted successfully!",
  //         icon: "success",
  //         confirmButtonText: "OK",
  //       });
  //     } else {
  //       Swal.fire({
  //         title: "Error!",
  //         text: "Failed to submit order.",
  //         icon: "error",
  //         confirmButtonText: "Retry",
  //       });
  //     }
  //   } catch (error) {
  //     Swal.fire({
  //       title: "Error!",
  //       text: "An error occurred while submitting the order.",
  //       icon: "error",
  //       confirmButtonText: "Retry",
  //     });
  //   }
  // };

  return (
    <div className="max-w-2xl mx-auto my-20 p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Place Your Order</h2>

      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          name="productTitle"
          value={formData.productTitle}
          readOnly
          className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"
        />
        <input 
          type="text"
          name="productSKU"
          value={formData.productSKU}
          readOnly
          className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"
        /> */}
        {[
          {
            label: "First Name",
            name: "firstName",
            type: "text",
            required: true,
          },
          {
            label: "Last Name",
            name: "lastName",
            type: "text",
            required: true,
          },
          { label: "Company Name", name: "companyName", type: "text" },
          { label: "Address", name: "address1", type: "text", required: true },
          { label: "City", name: "city", type: "text", required: true },
          {
            label: "State Code",
            name: "stateCode",
            type: "text",
            required: true,
          },
          {
            label: "Zip Code",
            name: "zipPostalCode",
            type: "text",
            required: true,
          },
          { label: "Phone", name: "phone", type: "text", required: true },
          {
            label: "Product SKU",
            name: "productSKU",
            type: "text",
            required: true,
            readOnly: true,
          },
          {
            label: "Product Title",
            name: "productTitle",
            type: "text",
            required: true,
          },
        ].map(({ label, name, type, required }, index) => (
          <div className="mb-4" key={index}>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor={name}
            >
              {label}
            </label>
            <input
              type={type}
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
              required={required}
            />
          </div>
        ))}

        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;

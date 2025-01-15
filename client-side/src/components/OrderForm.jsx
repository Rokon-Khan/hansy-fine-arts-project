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

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { City, Country, State } from "country-state-city";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const OrderForm = () => {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  // const [isPaid, setIsPaid] = useState(false);
  // const handlePaymentSuccess = (details) => {
  //   setIsPaid(true);
  //   Swal.fire({
  //     title: "Payment Successful!",
  //     text: `Transaction completed by ${details.payer.name.given_name}.`,
  //     icon: "success",
  //     confirmButtonText: "OK",
  //   });
  // };

  // const handlePaymentError = (error) => {
  //   console.error("Payment Error:", error);
  //   Swal.fire({
  //     title: "Payment Error!",
  //     text: "An error occurred during the payment process.",
  //     icon: "error",
  //     confirmButtonText: "Retry",
  //   });
  // };

  const location = useLocation();
  const { productSKU, productTitle, Price } = location.state;
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
          title: "Order Confirmed!",
          text: "Your order has been successfully placed.",
          icon: "success",
          confirmButtonText: "OK",
        });
        // Optionally reset the form or redirect the user
        setFormData({
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
        setIsPaymentSuccessful(false);
      } else {
        Swal.fire({
          title: "Order Submission Failed",
          text: "There was an error confirming your order. Please try again.",
          icon: "error",
          confirmButtonText: "Retry",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while processing your order.",
        icon: "error",
        confirmButtonText: "Retry",
      });
      console.error("Order submission error:", err);
    }
  };

  // const [countries, setCountries] = useState(Country.getAllCountries());
  // const [states, setStates] = useState([]);
  // const [cities, setCities] = useState([]);

  // const [selectedCountry, setSelectedCountry] = useState(null);
  // const [selectedState, setSelectedState] = useState(null);

  // const handleCountryChange = (country) => {
  //   setSelectedCountry(country);
  //   setStates(State.getStatesOfCountry(country.isoCode));
  //   setCities([]);
  // };

  // const handleStateChange = (state) => {
  //   setSelectedState(state);
  //   setCities(City.getCitiesOfState(selectedCountry.isoCode, state.isoCode));
  // };

  const [countries] = useState(Country.getAllCountries());
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleCountryChange = (e) => {
    const country = countries.find((c) => c.isoCode === e.target.value);
    setSelectedCountry(country);
    setFormData({ ...formData, countryCode: country.isoCode });
    setStates(State.getStatesOfCountry(country.isoCode));
    setCities([]);
  };

  const handleStateChange = (e) => {
    const state = states.find((s) => s.isoCode === e.target.value);
    setSelectedState(state);
    setFormData({ ...formData, stateCode: state.isoCode });
    setCities(City.getCitiesOfState(selectedCountry.isoCode, state.isoCode));
  };

  const handleCityChange = (e) => {
    setFormData({ ...formData, city: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto my-20 p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Place Your Order</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="country"
          >
            Country
          </label>
          <select
            id="country"
            value={formData.countryCode}
            onChange={handleCountryChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.isoCode} value={country.isoCode}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="state">
            State
          </label>
          <select
            id="state"
            value={formData.stateCode}
            onChange={handleStateChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
            disabled={!selectedCountry}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="city">
            City
          </label>
          <select
            id="city"
            value={formData.city}
            onChange={handleCityChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
            disabled={!selectedState}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        {/* <input
          type="text"
          name="productTitle"
          value={formData.productTitle}
          readOnly
          className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"
        />
        */}
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
          // {
          //   label: "Product SKU",
          //   name: "productSKU",
          //   type: "text",
          //   required: true,
          //   readOnly: true,
          // },
          // {
          //   label: "Product Title",
          //   name: "productTitle",
          //   type: "text",
          //   required: true,
          // },
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
        <div className="my-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="country"
          >
            Product SKU
          </label>
          <input
            type="text"
            name="productSKU"
            value={formData.productSKU}
            readOnly
            className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"
          />
        </div>
        {/* PayPal Button */}
        <PayPalScriptProvider
          options={{
            "client-id": `${import.meta.env.VITE_PAYPAL_CLIENT_ID}`,
          }}
          className="z-1"
        >
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: Price.toString(), // Replace with actual dynamic value
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                Swal.fire({
                  title: "Payment Successful!",
                  text: `Transaction completed by ${details.payer.name.given_name}`,
                  icon: "success",
                  confirmButtonText: "OK",
                });
                setIsPaymentSuccessful(true);
              });
            }}
            onError={(err) => {
              Swal.fire({
                title: "Payment Error",
                text: "An error occurred during the payment process.",
                icon: "error",
                confirmButtonText: "Retry",
              });
              console.error("PayPal Checkout onError:", err);
            }}
          />
        </PayPalScriptProvider>
        {/* <PayPalScriptProvider
          options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}
        >
          <div className="max-w-2xl mx-auto my-20 p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Place Your Order
            </h2>
            <form onSubmit={handleSubmit}>
          
              <div className="text-center">
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: "100.00", // Replace with the actual amount
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      Swal.fire({
                        title: "Payment Successful!",
                        text: `Transaction completed by ${details.payer.name.given_name}`,
                        icon: "success",
                        confirmButtonText: "OK",
                      });
                      // Optionally, handle post-payment actions here
                    });
                  }}
                  onError={(err) => {
                    Swal.fire({
                      title: "Payment Error",
                      text: "An error occurred during the payment process.",
                      icon: "error",
                      confirmButtonText: "Retry",
                    });
                    console.error("PayPal Checkout onError:", err);
                  }}
                />
              </div>
            </form>
          </div>
        </PayPalScriptProvider> */}

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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const [shippingAddress, setShippingAddress] = useState({});
  const [billingAddress, setBillingAddress] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    Swal.fire({
      title: "Added to Cart!",
      text: `${productTitle} has been added to your cart.`,
      icon: "success",
      confirmButtonText: "Go to Cart",
    }).then((result) => {
      if (result.isConfirmed) {
        // Navigate to the cart route
        navigate("/");
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 mt-24 rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="grid grid-cols-1 gap-6">
          {/* Ship To Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Ship To</h2>
            <div className="bg-white p-4 rounded-lg shadow">
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name *"
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    className="border p-2 rounded w-full"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="border p-2 rounded w-full mt-4"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="border p-2 rounded w-full mt-4"
                />
                <input
                  type="text"
                  placeholder="Address *"
                  className="border p-2 rounded w-full mt-4"
                />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="City *"
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="text"
                    placeholder="Zip / Postal Code *"
                    className="border p-2 rounded w-full"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Bill To Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Bill To</h2>
            <div className="bg-white p-4 rounded-lg shadow">
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name *"
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    className="border p-2 rounded w-full"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="border p-2 rounded w-full mt-4"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="border p-2 rounded w-full mt-4"
                />
                <input
                  type="text"
                  placeholder="Address *"
                  className="border p-2 rounded w-full mt-4"
                />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="City *"
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="text"
                    placeholder="Zip / Postal Code *"
                    className="border p-2 rounded w-full"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1">
          {/* Choose Shipping Section */}
          <div className="mt-6 bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Choose Shipping</h2>
            <div className="grid grid-cols-3 gap-4">
              <label className="flex items-center space-x-3">
                <input type="radio" name="shipping" className="form-radio" />
                <span>Standard Shipping</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="radio" name="shipping" className="form-radio" />
                <span>Express Shipping</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="radio" name="shipping" className="form-radio" />
                <span>Overnight Delivery</span>
              </label>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="mt-6 bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div>
              <p>Subtotal: $100</p>
              <p>Tax: $5</p>
              <p>Shipping: $10</p>
              <p className="font-bold">Total: $115</p>
            </div>
          </div>

          {/* Discount Code Section */}
          <div className="mt-6 bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">
              Discount Code / Gift Card
            </h2>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Enter Code"
                className="border p-2 rounded w-full"
              />
              <button className="bg-gray-800 text-white px-4 py-2 rounded">
                Apply
              </button>
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="mt-6 bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <div className="space-y-4">
              {/* PayPal Button */}
              <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
                Pay with PayPal
              </button>

              {/* Credit Card Form */}
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Card Number *"
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="text"
                    placeholder="Card Holder Name *"
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="Expiry Date *"
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="text"
                    placeholder="CVV *"
                    className="border p-2 rounded w-full"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="mt-6">
            <button
              onClick={handlePlaceOrder}
              className="bg-green-600 text-white px-6 py-2 rounded w-full"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useCart } from "../cartprovider/CartContext";

const ProductCart = ({ product }) => {
  const { productTitle, productImage, description, category, price } =
    product || {};

  const { cart, dispatch } = useCart();
  // console.log(cart);

  const updateQuantity = (id, delta) => {
    const product = cart.find((item) => item.id === id);
    if (product) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id, quantity: product.quantity + delta },
      });
    }
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  // const updateQuantity = (id, delta) => {
  //   setCart((prevCart) =>
  //     prevCart.map((item) =>
  //       item.id === id
  //         ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
  //         : item
  //     )
  //   );
  // };

  // const removeItem = (id) => {
  //   setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  // };

  // const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  // const totalPrice = cart
  //   .reduce((total, item) => total + item.price * item.quantity, 0)
  //   .toFixed(2);

  return (
    <div className="flex flex-col md:flex-row justify-between p-4 gap-6">
      {/* Cart Items */}
      <div className="w-full md:w-3/5">
        <h2 className="text-xl font-semibold mb-4">SHOPPING CART</h2>
        {/* <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border-b pb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div className="flex-grow">
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
              <p className="w-16 text-right">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                className="ml-4 text-red-500"
                onClick={() => removeItem(item.id)}
              >
                <MdDeleteForever />
              </button>
            </div>
          ))}
        </div> */}
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border-b pb-4">
              <img
                src={item.productImage}
                alt={item.name}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div className="flex-grow">
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-gray-600">
                  ${isNaN(item.price) ? "0.00" : Number(item.price).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
              <p className="w-16 text-right">
                $
                {isNaN(item.price)
                  ? "0.00"
                  : (item.price * item.quantity).toFixed(2)}
              </p>
              <button
                className="ml-4 text-red-500"
                onClick={() => removeItem(item.id)}
              >
                <MdDeleteForever />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      <div className="w-full md:w-2/5 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">CART TOTALS</h2>
        <div className="flex justify-between mb-2">
          <p className="text-gray-600">TOTAL ITEMS:</p>
          <p className="font-medium">{totalItems}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Shipping:</p>
          <p className="text-gray-800">
            Shipping to 123 Default St, Default City, DC
          </p>
          <button className="text-blue-500 text-sm underline">
            Change Address
          </button>
        </div>
        <div className="flex justify-between mb-6">
          <p className="text-gray-600">Total Price:</p>
          <p className="font-bold">${totalPrice}</p>
        </div>
        <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default ProductCart;

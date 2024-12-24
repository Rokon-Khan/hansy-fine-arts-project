import React, { createContext, useContext, useReducer } from "react";

// Create context
const CartContext = createContext();

// Reducer function for cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // console.log(action.payload);
      const existingProductIndex = state.findIndex((item) => {
        console.log(item._id, action.payload._id);
        return item._id === action.payload._id;
      });
      // console.log(existingProductIndex);
      if (existingProductIndex !== -1) {
        // Update quantity if the product exists
        const updatedCart = [...state];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        // Add new product
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(action.payload.quantity, 1) }
          : item
      );
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

// Provider component
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);

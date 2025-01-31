// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import { CartProvider } from "../src/cartprovider/CartContext";

// import AuthProvider from "./authprovider/AuthProvider";
// import "./index.css";
// import { router } from "./routes/Routes";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <AuthProvider>
//       <CartProvider>
//         <RouterProvider router={router}></RouterProvider>
//       </CartProvider>
//     </AuthProvider>
//   </StrictMode>
// );

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import { CartProvider } from "../src/cartprovider/CartContext";
// import AuthProvider from "./authprovider/AuthProvider";
// import { ThemeProvider } from "./contexts/theme-context"; // Import ThemeProvider
// import "./index.css";
// import { router } from "./routes/Routes";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <ThemeProvider storageKey="theme">
//       {" "}
//       {/* Wrap the app with ThemeProvider */}
//       <AuthProvider>
//         <CartProvider>
//           <RouterProvider router={router} />
//         </CartProvider>
//       </AuthProvider>
//     </ThemeProvider>
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "../src/cartprovider/CartContext";
import AuthProvider from "./authprovider/AuthProvider";
import { ThemeProvider } from "./contexts/theme-context";
import "./index.css";
import { router } from "./routes/Routes"; // ✅ Correct Import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider storageKey="theme">
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);

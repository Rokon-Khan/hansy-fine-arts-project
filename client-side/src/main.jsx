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

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import { CartProvider } from "../src/cartprovider/CartContext";
// import AuthProvider from "./authprovider/AuthProvider";
// import { ThemeProvider } from "./contexts/theme-context";
// import "./index.css";
// import { router } from "./routes/Routes"; // ✅ Correct Import

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <ThemeProvider storageKey="theme">
//       <AuthProvider>
//         <CartProvider>
//           <RouterProvider router={router} />
//         </CartProvider>
//       </AuthProvider>
//     </ThemeProvider>
//   </StrictMode>
// );

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "../src/cartprovider/CartContext";
import { ThemeProvider } from "./contexts/theme-context";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";
import { router } from "./routes/Routes";

// Create a client
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider storageKey="theme">
      <AuthProvider>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <CartProvider>
              <RouterProvider router={router} />
            </CartProvider>
          </QueryClientProvider>
          <Toaster position="top-right" reverseOrder={false} />
        </HelmetProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);

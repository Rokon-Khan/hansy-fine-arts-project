import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "../src/dashboard/store";
import AuthProvider from "./authprovider/AuthProvider";
import App from "./dashboard/App";
import "./index.css";
import { router } from "./routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Provider>
    </AuthProvider>
  </StrictMode>
);

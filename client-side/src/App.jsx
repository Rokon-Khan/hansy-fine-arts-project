import { createBrowserRouter } from "react-router-dom";

import { ThemeProvider } from "../src/contexts/theme-context";

import DashboardPage from "../src/routes/dashboard/page";
import Layout from "../src/routes/layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: "analytics",
          element: <h1 className="title">Analytics</h1>,
        },
        {
          path: "reports",
          element: <h1 className="title">Reports</h1>,
        },
        {
          path: "customers",
          element: <h1 className="title">Customers</h1>,
        },
        {
          path: "new-customer",
          element: <h1 className="title">New Customer</h1>,
        },
        {
          path: "verified-customers",
          element: <h1 className="title">Verified Customers</h1>,
        },
        {
          path: "products",
          element: <h1 className="title">Products</h1>,
        },
        {
          path: "new-product",
          element: <h1 className="title">New Product</h1>,
        },
        {
          path: "inventory",
          element: <h1 className="title">Inventory</h1>,
        },
        {
          path: "settings",
          element: <h1 className="title">Settings</h1>,
        },
      ],
    },
  ]);

  return <ThemeProvider storageKey="theme"></ThemeProvider>;
}

export default App;

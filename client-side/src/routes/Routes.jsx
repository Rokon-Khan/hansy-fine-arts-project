// import { createBrowserRouter } from "react-router-dom";
// import FinerWorksArt from "../components/FinerWorksArt";
// import OrderForm from "../components/OrderForm";
// import ProductCards from "../components/ProductCards";
// import RoomPreview from "../components/RoomPreview";
// import MainLayout from "../layout/MainLayout";
// import AbstractDesign from "../pages/AbstractDesign";
// import ArtsyProduct from "../pages/ArtsyProduct";
// import Bio from "../pages/Bio";
// import CheckOut from "../pages/CheckOut";
// import Contact from "../pages/Contact";
// import Contemporary from "../pages/Contemporary";
// import CustomPortrait from "../pages/CustomPortrait";
// import Error from "../pages/Error";
// import Faq from "../pages/Faq";
// import FileUploadComponent from "../pages/FileUploadComponent";
// import FinerWorksProductDetail from "../pages/FinerWorksProductDetail";
// import Gallery from "../pages/Gallery";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import ProductDetail from "../pages/ProductDetail";
// import ProductDetails from "../pages/ProductDetails";
// import Register from "../pages/Register";
// import Shop from "../pages/Shop";
// import ShoppingCart from "../pages/ShoppingCart";
// import { ThemeProvider } from "../contexts/theme-context";

// import DashboardPage from "./dashboard/page";
// import Layout from "./layout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//       },
//     ],
//   },
//   {
//     path: "/shop-art",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/shop-art",
//         element: <Gallery></Gallery>,
//         loader: async () => {
//           const response = await fetch(
//             `${import.meta.env.VITE_API_URL}/products`
//           );
//           if (!response.ok) {
//             throw new Error("Failed to fetch products");
//           }
//           return response.json(); // Load all products
//         },
//       },
//     ],
//   },
//   {
//     path: "/bio",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/bio",
//         element: <Bio></Bio>,
//       },
//     ],
//   },
//   {
//     path: "/custom-portrait",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/custom-portrait",
//         element: <CustomPortrait></CustomPortrait>,
//       },
//     ],
//   },
//   {
//     path: "/artsy-product",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/artsy-product",
//         element: <ArtsyProduct></ArtsyProduct>,
//       },
//     ],
//   },
//   {
//     path: "/contemporary",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/contemporary",
//         element: <Contemporary></Contemporary>,
//       },
//     ],
//   },
//   {
//     path: "/abstract-designs",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/abstract-designs",
//         element: <AbstractDesign></AbstractDesign>,
//       },
//     ],
//   },
//   {
//     path: "/contact",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/contact",
//         element: <Contact></Contact>,
//       },
//     ],
//   },
//   {
//     path: "/roompreview",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/roompreview/:id",
//         element: <RoomPreview></RoomPreview>,
//         loader: async ({ params }) =>
//           fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`),
//       },
//     ],
//   },
//   {
//     path: "/shop",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/shop",
//         element: <Shop></Shop>,
//         loader: async () => {
//           const response = await fetch(
//             `${import.meta.env.VITE_API_URL}/products`
//           );
//           if (!response.ok) {
//             throw new Error("Failed to fetch products");
//           }
//           return response.json(); // Load all products
//         },
//         children: [
//           {
//             path: "", // Default child route for /shop
//             element: <ProductCards></ProductCards>, // Render all products here
//             loader: async () => {
//               const response = await fetch(
//                 `${import.meta.env.VITE_API_URL}/products`
//               );
//               if (!response.ok) {
//                 throw new Error("Failed to fetch products");
//               }
//               return response.json(); // Return all products
//             },
//           },
//           {
//             path: "category/:category",
//             element: <ProductCards></ProductCards>,
//             loader: async ({ params }) => {
//               const response = await fetch(
//                 `${import.meta.env.VITE_API_URL}/products`
//               );
//               if (!response.ok) {
//                 throw new Error("Failed to fetch products");
//               }
//               const products = await response.json();
//               return products.filter(
//                 (product) => product.category === params.category
//               ); // Filter products by category
//             },
//           },
//         ],
//       },
//     ],
//   },

//   {
//     path: "/cart",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/cart",
//         element: <ShoppingCart></ShoppingCart>,
//       },
//     ],
//   },
//   {
//     path: "/checkout",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/checkout",
//         element: <CheckOut></CheckOut>,
//       },
//     ],
//   },
//   {
//     path: "/faq",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/faq",
//         element: <Faq></Faq>,
//       },
//     ],
//   },
//   {
//     path: "/custom-art",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/custom-art",
//         element: <FileUploadComponent></FileUploadComponent>,
//       },
//     ],
//   },
//   {
//     path: "/product",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/product/:id",
//         element: <ProductDetails></ProductDetails>,
//         loader: async ({ params }) =>
//           fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`),
//         // fetch(`http://localhost:5000/products/${params.id}`),

//         // loader: async ({ params }) =>
//         //   fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`).then(
//         //     (res) => res.json()
//         //   ),
//       },
//     ],
//   },
//   {
//     path: "/product-detail",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/product-detail/:id",
//         element: <ProductDetail></ProductDetail>,
//         loader: async ({ params }) =>
//           fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`),
//         // fetch(`http://localhost:5000/products/${params.id}`),

//         // loader: async ({ params }) =>
//         //   fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`).then(
//         //     (res) => res.json()
//         //   ),
//       },
//     ],
//   },
//   {
//     path: "/finerworks-art",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/finerworks-art",
//         element: <FinerWorksArt></FinerWorksArt>,
//       },
//     ],
//   },

//   {
//     path: "/finer-works-product-detail",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/finer-works-product-detail/sku/:sku",
//         element: <FinerWorksProductDetail />,
//         loader: async ({ params }) =>
//           fetch(`${import.meta.env.VITE_API_URL}/products/sku/${params.sku}`),
//       },
//     ],
//   },
//   {
//     path: "/finer-works-order",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/finer-works-order",
//         element: <OrderForm></OrderForm>,
//       },
//     ],
//   },

//   {
//     path: "/dashboard",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <DashboardPage />,
//       },
//       {
//         path: "analytics",
//         element: <h1 className="title">Analytics</h1>,
//       },
//       {
//         path: "reports",
//         element: <h1 className="title">Reports</h1>,
//       },
//       {
//         path: "customers",
//         element: <h1 className="title">Customers</h1>,
//       },
//       {
//         path: "new-customer",
//         element: <h1 className="title">New Customer</h1>,
//       },
//       {
//         path: "verified-customers",
//         element: <h1 className="title">Verified Customers</h1>,
//       },
//       {
//         path: "products",
//         element: <h1 className="title">Products</h1>,
//       },
//       {
//         path: "new-product",
//         element: <h1 className="title">New Product</h1>,
//       },
//       {
//         path: "inventory",
//         element: <h1 className="title">Inventory</h1>,
//       },
//       {
//         path: "settings",
//         element: <h1 className="title">Settings</h1>,
//       },
//     ],
//   },

//   {
//     path: "/login",
//     element: <Login></Login>,
//   },
//   {
//     path: "/register",
//     element: <Register></Register>,
//   },

//   //   {
//   //     path: "/forget-password",
//   //     element: <ForgetPassword></ForgetPassword>,
//   //   },
//   //   {
//   //     path: "/update-profile",
//   //     element: <UpdateProfile></UpdateProfile>,
//   //   },
//   {
//     path: "*",
//     element: <Error></Error>,
//   },
// ]);

// return <ThemeProvider storageKey="theme"></ThemeProvider>;

// export { router };

import { createBrowserRouter } from "react-router-dom";
import ProductCards from "../components/ProductCards";
import RoomPreview from "../components/RoomPreview";
import MainLayout from "../layout/MainLayout";
import AbstractDesign from "../pages/AbstractDesign";
import ArtsyProduct from "../pages/ArtsyProduct";
import Bio from "../pages/Bio";
import CheckOut from "../pages/CheckOut";
import Contact from "../pages/Contact";
import Contemporary from "../pages/Contemporary";
import CustomPortrait from "../pages/CustomPortrait";
import Error from "../pages/Error";
import Faq from "../pages/Faq";
import FileUploadComponent from "../pages/FileUploadComponent";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";

import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import ShoppingCart from "../pages/ShoppingCart";
import SignUp from "../pages/SignUp/SignUp";
import Layout from "./dashboard/Layout";
import DashboardPage from "./dashboard/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/shop-art",
    element: <MainLayout />,
    children: [
      {
        path: "/shop-art",
        element: <Gallery />,
        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/products`
          );
          if (!response.ok) throw new Error("Failed to fetch products");
          return response.json();
        },
      },
    ],
  },
  {
    path: "/bio",
    element: <MainLayout />,
    children: [{ path: "/bio", element: <Bio /> }],
  },
  {
    path: "/custom-portrait",
    element: <MainLayout />,
    children: [{ path: "/custom-portrait", element: <CustomPortrait /> }],
  },
  {
    path: "/artsy-product",
    element: <MainLayout />,
    children: [{ path: "/artsy-product", element: <ArtsyProduct /> }],
  },
  {
    path: "/contemporary",
    element: <MainLayout />,
    children: [{ path: "/contemporary", element: <Contemporary /> }],
  },
  {
    path: "/abstract-designs",
    element: <MainLayout />,
    children: [{ path: "/abstract-designs", element: <AbstractDesign /> }],
  },
  {
    path: "/contact",
    element: <MainLayout />,
    children: [{ path: "/contact", element: <Contact /> }],
  },
  {
    path: "/roompreview/:id",
    element: <MainLayout />,
    children: [
      {
        path: "/roompreview/:id",
        element: <RoomPreview />,
        loader: async ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`),
      },
    ],
  },
  {
    path: "/shop",
    element: <MainLayout />,
    children: [
      {
        path: "/shop",
        element: <Shop />,
        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/products`
          );
          if (!response.ok) throw new Error("Failed to fetch products");
          return response.json();
        },
        children: [
          {
            path: "",
            element: <ProductCards />,
            loader: async () => {
              const response = await fetch(
                `${import.meta.env.VITE_API_URL}/products`
              );
              if (!response.ok) throw new Error("Failed to fetch products");
              return response.json();
            },
          },
          {
            path: "category/:category",
            element: <ProductCards />,
            loader: async ({ params }) => {
              const response = await fetch(
                `${import.meta.env.VITE_API_URL}/products`
              );
              if (!response.ok) throw new Error("Failed to fetch products");
              const products = await response.json();
              return products.filter(
                (product) => product.category === params.category
              );
            },
          },
        ],
      },
    ],
  },
  {
    path: "/cart",
    element: <MainLayout />,
    children: [{ path: "/cart", element: <ShoppingCart /> }],
  },
  {
    path: "/checkout",
    element: <MainLayout />,
    children: [{ path: "/checkout", element: <CheckOut /> }],
  },
  {
    path: "/faq",
    element: <MainLayout />,
    children: [{ path: "/faq", element: <Faq /> }],
  },
  {
    path: "/custom-art",
    element: <MainLayout />,
    children: [{ path: "/custom-art", element: <FileUploadComponent /> }],
  },
  {
    path: "/product/:id",
    element: <MainLayout />,
    children: [
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: async ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      { index: true, element: <DashboardPage /> },
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
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/sign-up",
    element: <SignUp></SignUp>,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export { router };

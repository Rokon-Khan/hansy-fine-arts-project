import { createBrowserRouter } from "react-router-dom";
import ProductCards from "../components/ProductCards";
import RoomPreview from "../components/RoomPreview";
import App from "../dashboard/App";
import MainLayout from "../layout/MainLayout";
import Bio from "../pages/Bio";
import CheckOut from "../pages/CheckOut";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Faq from "../pages/Faq";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
import ProductDetails from "../pages/ProductDetails";
import Register from "../pages/Register";
import Shop from "../pages/Shop";
import ShoppingCart from "../pages/ShoppingCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/gallery",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
    ],
  },
  {
    path: "/bio",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/bio",
        element: <Bio></Bio>,
      },
    ],
  },
  {
    path: "/contact",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/roompreview",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/roompreview",
        element: <RoomPreview></RoomPreview>,
      },
    ],
  },
  {
    path: "/shop",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/shop",
        element: <Shop></Shop>,
        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/products`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch products");
          }
          return response.json(); // Load all products
        },
        children: [
          {
            path: "", // Default child route for /shop
            element: <ProductCards></ProductCards>, // Render all products here
            loader: async () => {
              const response = await fetch(
                `${import.meta.env.VITE_API_URL}/products`
              );
              if (!response.ok) {
                throw new Error("Failed to fetch products");
              }
              return response.json(); // Return all products
            },
          },
          {
            path: "category/:category",
            element: <ProductCards></ProductCards>,
            loader: async ({ params }) => {
              const response = await fetch(
                `${import.meta.env.VITE_API_URL}/products`
              );
              if (!response.ok) {
                throw new Error("Failed to fetch products");
              }
              const products = await response.json();
              return products.data.filter(
                (product) => product.category === params.category
              ); // Filter products by category
            },
          },
        ],
      },
    ],
  },

  {
    path: "/cart",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/cart",
        element: <ShoppingCart></ShoppingCart>,
      },
    ],
  },
  {
    path: "/checkout",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/checkout",
        element: <CheckOut></CheckOut>,
      },
    ],
  },
  {
    path: "/faq",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
    ],
  },
  {
    path: "/product",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: async ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`),
        // fetch(`http://localhost:5000/products/${params.id}`),

        // loader: async ({ params }) =>
        //   fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`).then(
        //     (res) => res.json()
        //   ),
      },
    ],
  },
  {
    path: "/product-detail",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/product-detail/:id",
        element: <ProductDetail></ProductDetail>,
        loader: async ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`),
        // fetch(`http://localhost:5000/products/${params.id}`),

        // loader: async ({ params }) =>
        //   fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`).then(
        //     (res) => res.json()
        //   ),
      },
    ],
  },

  //   {
  //     path: "/dashboard",
  //     element: <MainLaout></MainLaout>,
  //     children: [
  //       {
  //         path: "/dashboard",
  //         element: (
  //           <PrivateRoute>
  //             <Dashboard></Dashboard>
  //           </PrivateRoute>
  //         ),
  //       },
  //     ],
  //   },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard/*",
    element: <App></App>,
  },

  //   {
  //     path: "/forget-password",
  //     element: <ForgetPassword></ForgetPassword>,
  //   },
  //   {
  //     path: "/update-profile",
  //     element: <UpdateProfile></UpdateProfile>,
  //   },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export { router };

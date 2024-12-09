import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Bio from "../pages/Bio";
import Error from "../pages/Error";
import Gallery from "../pages/Gallery";

import Home from "../pages/Home";
import Login from "../pages/Login";
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
        element: <Bio></Bio>,
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

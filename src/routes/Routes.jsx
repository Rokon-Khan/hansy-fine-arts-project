import { createBrowserRouter } from "react-router-dom";
import Gallery from "../components/Gallery";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

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

import { useRoutes } from "react-router-dom";
import {
  Categories,
  CreateCategory,
  CreateOrder,
  CreateProduct,
  CreateReview,
  CreateUser,
  EditCategory,
  EditOrder,
  EditProduct,
  EditReview,
  EditUser,
  HelpDesk,
  HomeLayout,
  Landing,
  LandingV2,
  Login,
  Notifications,
  Orders,
  Products,
  Profile,
  Register,
  Reviews,
  Users,
} from "./pages";

const routes = [
  // Public Routes
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // Protected Routes (Dashboard)
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "landing-v2", element: <LandingV2 /> },
      { path: "products", element: <Products /> },
      { path: "products/create-product", element: <CreateProduct /> },
      { path: "products/:id", element: <EditProduct /> },
      { path: "categories", element: <Categories /> },
      { path: "categories/create-category", element: <CreateCategory /> },
      { path: "categories/:id", element: <EditCategory /> },
      { path: "orders", element: <Orders /> },
      { path: "orders/create-order", element: <CreateOrder /> },
      { path: "orders/:id", element: <EditOrder /> },
      { path: "reviews", element: <Reviews /> },
      { path: "reviews/create-review", element: <CreateReview /> },
      { path: "reviews/:id", element: <EditReview /> },
      { path: "users", element: <Users /> },
      { path: "users/create-user", element: <CreateUser /> },
      { path: "users/:id", element: <EditUser /> },
      { path: "help-desk", element: <HelpDesk /> },
      { path: "notifications", element: <Notifications /> },
      { path: "profile", element: <Profile /> },
    ],
  },
];

const App = () => {
  const routing = useRoutes(routes);
  return routing;
};

export default App;

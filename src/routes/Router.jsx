import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
// import Services from "../pages/services/Products";
import AddServices from "../pages/services/AddServices";
import Products from "../pages/services/Products";
import ManageProduct from "../pages/services/manageProduct/ManageProduct";
import ManageProductCard from "../pages/services/manageProduct/ManageProductCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
      },
      {
        path: "shop",
      },
      {
        path: "login",
      },
      {
        path: "register",
      },
      {
        path: "handicraft",
      },
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "products/:id",
        element: <ManageProductCard></ManageProductCard>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "addServices",
        element: <AddServices></AddServices>,
      },
    ],
  },
]);

export default router;

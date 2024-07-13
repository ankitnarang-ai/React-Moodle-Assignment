import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/layout/Layout";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
]);

export default router
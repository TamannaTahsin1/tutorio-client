import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AllClassesCard from "../Pages/AllClasses/AllClassesCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/classes",
            element: <AllClasses></AllClasses>,
            loader: () => fetch('/data.json'),
        },
        {
            path: "/classes",
            element: <AllClassesCard></AllClassesCard>,
            loader: () => fetch('/data.json'),
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
    ]
  },
]);

export default router;

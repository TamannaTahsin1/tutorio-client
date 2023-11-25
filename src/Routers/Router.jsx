import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AllClassesCard from "../Pages/AllClasses/AllClassesCard";
import Partners from "../Pages/Home/Partners/Partners";
import Classes from "../Pages/Classes/Classes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllClassesDetails from "../Pages/AllClasses/AllClassesDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
            path: "/details/:id",
            element: <AllClassesDetails></AllClassesDetails>,
            loader: () => fetch('/data.json'),
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/partners",
            element: <Partners></Partners>,
        },
        {
            path: "/class",
            element: <Classes></Classes>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
    ]
  },
]);

export default router;

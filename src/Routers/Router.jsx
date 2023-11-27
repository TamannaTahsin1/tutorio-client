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
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Teach from "../Pages/Teach/Teach";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import TeacherReq from "../Pages/Dashboard/TeacherReq/TeacherReq";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";

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
            element: <PrivateRoute><AllClasses></AllClasses></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/classes'),
        },
        {
            path: "/classes",
            element: <PrivateRoute><AllClassesCard></AllClassesCard></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/classes'),
        },
        {
            path: "/details/:_id",
            element: <PrivateRoute><AllClassesDetails></AllClassesDetails></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/classes'),
        },
        {
            path: "/teach",
            element: <Teach></Teach>,
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
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
        // all user routes
        {
            path:'cart',
            element:<Cart></Cart>,
        },
        {
            path:'profile',
            element:<UserProfile></UserProfile>,
        },
        // admin routes
        {
            path:'users',
            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>,
        },
        {
            path:'manageClasses',
            element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>,
        },
        {
            path:'teacherReq',
            element:<AdminRoute><TeacherReq></TeacherReq></AdminRoute>,
            loader: () => fetch('http://localhost:5000/teach')
        }
    ]
  }
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllClasses from "../Pages/AllClasses/AllClasses";
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
import SomeClasses from "../Pages/Home/SomeClasses/SomeClasses";
import TeacherDashboard from "../Layout/TeacherDashboard";
import TeacherProfile from "../Pages/TeacherDashboard/TeacherProfile/TeacherProfile";
import AddClasses from "../Pages/TeacherDashboard/AddClasses/AddClasses";
import MyClasses from "../Pages/TeacherDashboard/MyClasses/MyClasses";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import SeeDetails from "../Pages/TeacherDashboard/MyClasses/SeeDetails/SeeDetails";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import StudentAssignment from "../Pages/Dashboard/StudentAssignment/StudentAssignment";

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
            loader: () => fetch('https://tutorio-server.vercel.app/classes'),
        },
        {
            path: "/someClasses",
            element: <SomeClasses></SomeClasses>,
            loader: () => fetch('https://tutorio-server.vercel.app/classes'),
        },
        {
            path: "/details/:_id",
            element: <PrivateRoute><AllClassesDetails></AllClassesDetails></PrivateRoute>,
            loader: () => fetch('https://tutorio-server.vercel.app/classes'),
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
            element:<PrivateRoute><Cart></Cart></PrivateRoute>,
        },
        {
            path:'profile',
            element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
        },
        {
            path:'assignment',
            element:<PrivateRoute><StudentAssignment></StudentAssignment></PrivateRoute>,
            loader: () => fetch('https://tutorio-server.vercel.app/assignment')
        },
        {
            path:'payment',
            element:<Payment></Payment>,
        },
        {
            path:'paymentHistory',
            element:<PaymentHistory></PaymentHistory>,
        },
        // admin routes
        {
            path:'adminHome',
            element:<AdminProfile></AdminProfile>,
        },
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
            loader: () => fetch('https://tutorio-server.vercel.app/teach')
        }
    ]
  },
  {
    path:'teacherDashboard',
    element:<PrivateRoute><TeacherDashboard></TeacherDashboard></PrivateRoute>,
    children:[
        // teachers only routes
        {
            path:'teacherHome',
            element:<TeacherProfile></TeacherProfile>,
        },
        {
            path:'addClasses',
            element:<AddClasses></AddClasses>,
        },
        {
            path:'myClasses',
            element:<MyClasses></MyClasses>,
            loader: () => fetch('https://tutorio-server.vercel.app/newClasses')
        },
        {
            path:'seeDetails',
            element:<SeeDetails></SeeDetails>,
            loader: () => fetch('https://tutorio-server.vercel.app/newClasses')
        },
    ]
  }
]);

export default router;

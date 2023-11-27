import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
      // for loading
      if(loading || isAdminLoading){
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-infinity loading-lg"></span></div>
    }
    // to navigate in login page
    if(user && isAdmin){
        return children
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default AdminRoute;
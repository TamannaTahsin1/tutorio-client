import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useTeacher from "../Hooks/useTeacher";


const TeacherRoute = ({children}) => {
    const [user, loading] = useAuth()
    const [isTeacher, isTeacherLoading] = useTeacher();
      // for loading
      if(loading || isTeacherLoading){
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-infinity loading-lg"></span></div>
    }
    // to navigate in login page
    if(user && isTeacher){
        return children
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default TeacherRoute;


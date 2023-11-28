import { NavLink, Outlet } from "react-router-dom";
import logo from '../assets/img/logo.png'
import useTeacher from "../Hooks/useTeacher";
import { FaBook, FaHome, FaShoppingCart } from "react-icons/fa";
import useCart from "../Hooks/useCart";

const TeacherDashboard = () => {
    const [cart] = useCart();
    const [isTeacher] = useTeacher()
    return (
        <div>
          
        <div className='flex'>
          {/* dashboard sidebar */}
          <div className='w-64 min-h-screen bg-black text-orange-400'>
            <div className='flex items-center justify-center my-5'>
              <div>
                <img src={logo} alt='' className='w-16 h-16' />
              </div>
              <a className='btn btn-ghost normal-case text-2xl font-extrabold bg-gradient-to-r from-red-600 via-blue-500 to-gray-500 text-transparent bg-clip-text'>
                Tutorio
              </a>
            </div>
            <ul className='menu p-4'>
              {
                isTeacher ? <>
                <li className='font-semibold text-lg'>
                <NavLink
                  to='/teacherDashboard/teacherHome'
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white  text-base bg-orange-400"
                      : ""
                  }>
                  <FaHome></FaHome>
                  Teacher Profile
                </NavLink>
              </li>
              <li className='font-semibold text-lg'>
                <NavLink
                  to='/teacherDashboard/addClasses'
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white text-base bg-orange-400"
                      : ""
                  }>
                  <FaShoppingCart />
                  Add Classes
                </NavLink>
              </li>
              <li className='font-semibold text-lg'>
                <NavLink
                  to='/teacherDashboard/myClasses'
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white text-base bg-orange-400"
                      : ""
                  }>
                  <FaShoppingCart />
                  My Classes
                </NavLink>
              </li>
                </>
                :
                <>
                <li className='font-semibold text-lg'>
                <NavLink
                  to='/teacherDashboard/profile'
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white  text-base bg-orange-400"
                      : ""
                  }>
                  <FaHome></FaHome>
                  My Profile
                </NavLink>
              </li>
              <li className='font-semibold text-lg'>
                <NavLink
                  to='/teacherDashboard/cart'
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white text-base bg-orange-400"
                      : ""
                  }>
                  <FaShoppingCart />
                  My Cart ({cart.length})
                </NavLink>
              </li>
                </>
              }
              {/* shared nav links */}
              <div className='divider text-black'></div>
              <li className='font-semibold text-lg'>
                <NavLink
                  to='/'
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white text-base bg-orange-400"
                      : ""
                  }>
                  <FaHome />
                  Home
                </NavLink>
              </li>
              <li className='font-semibold text-lg'>
                <NavLink
                  to='/classes'
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white text-base bg-slate-800"
                      : ""
                  }>
                  <FaBook />
                  All Classes
                </NavLink>
              </li>
            </ul>
          </div>
          {/* teacherDashboard content */}
          <div className='flex-1'>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
};

export default TeacherDashboard;
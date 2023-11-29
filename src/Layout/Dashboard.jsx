import logo from "../assets/img/logo.png";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart, FaBook, FaUser, FaList } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import useTeacher from "../Hooks/useTeacher";


const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [isTeacher] =useTeacher()
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

            {/* *************ADMIN*************** */}
            {
              isAdmin ? <>
              <li className='font-semibold text-lg'>
              <NavLink
                to='/dashboard/adminHome'
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white  text-base bg-orange-400"
                    : ""
                }>
                <FaHome></FaHome>
                Admin Profile
              </NavLink>
            </li>
            <li className='font-semibold text-lg'>
              <NavLink
                to='/dashboard/teacherReq'
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white text-base bg-orange-400"
                    : ""
                }>
                <FaShoppingCart />
                Teacher Request
              </NavLink>
            </li>
            <li className='font-semibold text-lg'>
              <NavLink
                to='/dashboard/manageClasses'
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white text-base bg-orange-400"
                    : ""
                }>
                <FaShoppingCart />
                All Classes
              </NavLink>
            </li>
            <li className='font-semibold text-lg'>
              <NavLink
                to='/dashboard/users'
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white text-base bg-orange-400"
                    : ""
                }>
                <FaUser/>
                All Users
              </NavLink>
            </li>
              </>
              :
              <>
              <li className='font-semibold text-lg'>
              <NavLink
                to='/dashboard/profile'
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
                to='/dashboard/cart'
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
            <li className='font-semibold text-lg'>
              <NavLink
                to='/dashboard/paymentHistory'
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white text-base bg-orange-400"
                    : ""
                }>
                <FaList/>
                Payment History
              </NavLink>
            </li>
              </>
            }
            {/* *************TEACHER*************** */}
              {
                isTeacher && <>
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
        {/* dashboard content */}
        <div className='flex-1'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

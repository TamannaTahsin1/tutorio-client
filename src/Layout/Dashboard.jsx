import logo from "../assets/img/logo.png";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart, FaListUl, FaBook } from "react-icons/fa";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
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
          <ul className='menu'>
            <li className='font-semibold text-lg'>
              <NavLink
                to='/dashboard/userHome'
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white  text-base bg-orange-400"
                    : ""
                }>
                <FaHome></FaHome>
                User Home
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
                to='/dashboard/bookings'
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white text-base bg-orange-400"
                    : ""
                }>
                <FaListUl />
                My Class List
              </NavLink>
            </li>
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
                Add Classes
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

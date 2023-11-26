/** @format */

import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart, FaListUl, FaBook  } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className='flex'>
      {/* dashboard sidebar */}
      <div className='w-64 min-h-screen bg-orange-400 text-black'>
        <ul className='menu'>
          <li className='font-semibold text-lg'>
            <NavLink
              to='/dashboard/userHome'
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white  text-base bg-slate-800"
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
                  ? "text-white text-base bg-slate-800"
                  : ""
              }>
              <FaShoppingCart />
              My Cart
            </NavLink>
          </li>
          <li className='font-semibold text-lg'>
            <NavLink
              to='/dashboard/bookings'
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white text-base bg-slate-800"
                  : ""
              }>
              <FaListUl />
              My Class List
            </NavLink>
          </li>
          <div className="divider text-black"></div> 
          <li className='font-semibold text-lg'>
            <NavLink
              to='/'
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white text-base bg-slate-800"
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
  );
};

export default Dashboard;

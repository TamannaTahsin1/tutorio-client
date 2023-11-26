import { useContext } from 'react';
import logo from '../../assets/img/logo.png'

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../../Providers/AuthProvider';
import useCart from '../../Hooks/useCart';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()
  // for logout
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}
  const navLinks = (
    <>
      <li className='font-bold'>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold bg-blue-300"
              : ""
          }>
          Home
        </NavLink>
      </li>
      <li className='font-bold'>
        <NavLink
          to='/classes'
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold  bg-blue-300"
              : ""
          }>
          All Classes
        </NavLink>
      </li>
      <li className='font-bold'>
        <NavLink
          to='/dashboard/cart'
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold  bg-blue-300"
              : ""
          }>
  My Classes
  <div className="badge badge-secondary">+{cart.length}</div>

        </NavLink>
      </li>
    </>
  );
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
                {navLinks}
          </ul>
          
        </div>
        <div className='flex items-center justify-around'>
            <div>
              <img src={logo} alt='' className='w-16 h-16' />
            </div>
            <a className='btn btn-ghost normal-case text-2xl font-extrabold bg-gradient-to-r from-red-600 via-blue-500 to-gray-500 text-transparent bg-clip-text'>
              Tutorio
            </a>
          </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
        {navLinks}
        </ul>
      </div>
      <div className='navbar-end'>
          {user?.email ? (
            <div className='dropdown dropdown-end'>
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full'>
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
                <li>
                  <button className='btn btn-sm  btn-ghost'>
                    {user.displayName}
                  </button>
                </li>
                <li>
                <button                 
                    className='btn btn-sm  btn-ghost'>
                    Dashboard
                  </button>
                  <button
                    onClick={handleLogOut}
                    className='btn btn-sm  btn-ghost'>
                    Logout
                  </button>

                </li>
              </ul>
            </div>
          ) : (
            <Link to='/login'>
              <button className='btn border-none bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-red-500 hover:to-orange-500 text-white'>
                Login
              </button>
            </Link>
          )}
        </div>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import avatarImg from '../../assets/img/placeholder.jpg'


const MenuDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useAuth();

      // for logout
  const handleLogOut = () => {
    logOut()
    .then(() =>{})
    .catch()
  };
    return (
        <div>
                <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Become A Host btn */}
        {/* <div className='hidden md:block'>
          <button className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'>
            Host your home
          </button>
        </div> */}
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
        <IoMenu />
          <div className='hidden md:block'>
            {/* Avatar */}
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
              height='30'
              width='30'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Link
              to='/'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>
        {
            user ? <>
            <Link
              to='/dashboard'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold text-center'
            >
              Dashboard
            </Link>
            <div>
            <button
                onClick={handleLogOut}
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer w-full'
            >
              Logout
            </button>
            </div>
            <div>
            <button className='btn btn-sm  btn-ghost w-full'>
                    {user.displayName}
                  </button>
            </div>
            </>
            :
            <>
            <Link
              to='/login'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Login
            </Link>
            <Link
              to='/register'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Sign Up
            </Link>
            </>
        }
          </div>
        </div>
      )}
    </div>
        </div>
    );
};

export default MenuDropdown;
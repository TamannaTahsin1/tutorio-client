import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";

const MainLayout = () => {
    return (
        <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
            <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
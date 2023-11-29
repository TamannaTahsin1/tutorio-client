/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { FaBook, FaMoneyBill, FaPeopleArrows } from "react-icons/fa";
import avatarImg from "../../../assets/img/placeholder.jpg";

const AdminProfile = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div className="">
      <h2 className='text-center font-bold text-blue-600 text-4xl my-20'>
        ~~Welcome Back~~
      </h2>
    <div className="flex justify-center items-center">
    <div className='stats bg-gradient-to-r from-blue-400 to-blue-700 shadow '>
        <div className='stat'>
          <div className='stat-figure text-primary'>
            <FaMoneyBill className='text-2xl text-blue-600'></FaMoneyBill>
          </div>
          <div className='stat-title text-white'>Revenue</div>
          <div className='stat-value text-blue-600'>{stats.revenue}</div>
          <div className='stat-desc text-white'>21% more than last month</div>
        </div>

        <div className='stat'>
          <div className='stat-figure text-white'>
            <FaBook className='text-2xl text-white'></FaBook>
          </div>
          <div className='stat-title text-white'>Total CLasses</div>
          <div className='stat-value text-white'>{stats.totalCLasses}</div>
          <div className='stat-desc text-white'>21% more than last month</div>
        </div>

        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <FaPeopleArrows className='text-2xl'></FaPeopleArrows>
          </div>
          <div className='stat-title text-white'>Users</div>
          <div className='stat-value text-secondary'>{stats.users}</div>
          <div className='stat-desc text-white'>21% more than last month</div>
        </div>

        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <div className='avatar online'>
              <div className='w-16 rounded-full'>
                <img src={user && user.photoURL ? user.photoURL : avatarImg} />
              </div>
            </div>
          </div>
          <div className='stat-title text-white'>Enrolled</div>
          <div className='stat-value text-white'>{stats.enrolled}</div>
          <div className='stat-desc text-secondary'>31 seats remaining</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminProfile;

/** @format */

import { FaEye, FaPenAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyClassesCard = ({ myClass }) => {
  const { name, email, title, price, description, image } = myClass || {};
  return (
    <div>
      <div className='card h-[300px] card-side bg-base-100 shadow-xl'>
        <figure>
          <img src={image} className='w-[500px] h-full' alt='Movie' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-blue-600 font-bold'>{title}</h2>
          <p className='text-pink-600 font-bold'>Price:${price}</p>
          <p className='text-pink-600'>Teacher Name: {name}</p>
          <p className='text-pink-600'>Teacher Email: {email}</p>
          <p className='font-semibold text-gray-400'>{description}</p>
          <div className='card-actions btn-group-vertical justify-end '>
            <Link to='/teacherDashboard/seeDetails'>
              <button className='btn btn-md bg-pink-600 border-none text-white '>
                <FaEye></FaEye>
              </button>
            </Link>
            <button className='btn  btn-md  bg-pink-600 border-none text-white '>
              <FaPenAlt></FaPenAlt>
            </button>
            <button className='btn  btn-md  bg-pink-600 border-none text-white '>
              <FaTrashAlt></FaTrashAlt>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClassesCard;

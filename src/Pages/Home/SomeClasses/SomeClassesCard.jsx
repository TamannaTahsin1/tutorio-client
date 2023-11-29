/** @format */

import { Link } from "react-router-dom";

const SomeClassesCard = ({ item }) => {
  const {
    _id,
    image,
    name,
    title,
    short_description,
    total_enrollment,
    price,
  } = item || {};
  return (
    <div>
      <div className='card w-96 h-[500px]  bg-base-100 shadow-xl text-white'>
        <figure className='px-10 pt-10'>
          <img src={image} alt={name} className='rounded-xl w-full h-60' />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title text-blue-600'>{title}</h2>
          <p className='text-lg text-pink-600'>
            <span className='font-bold'>Price:</span> ${price}
          </p>
          <p className='text-sm text-gray-500 font-semibold'>
            {short_description}
          </p>
          <p className='text-pink-600'>
            <span className='font-bold '>Enrolled:</span>
            {total_enrollment}
          </p>
       <div className="flex justify-center items-center">
       <div
            className='relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before: -translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before: transition-all
            
            after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700
            after:border-l-transparent
            after:border-b-transparent
            after:border-r-transparent
            after:opacity-0
            after:transition-all

            hover:before:opacity-100 hover:after:opacity-100
            '
            data-tip='enroll class'>
            <Link to={`/details/${_id}`}>
              <button className='btn btn-outline text-blue-500 border-0 border-b-4 border-t-4'>
                Enroll
              </button>
            </Link>
          </div>
       </div>
        </div>
      </div>
    </div>
  );
};

export default SomeClassesCard;

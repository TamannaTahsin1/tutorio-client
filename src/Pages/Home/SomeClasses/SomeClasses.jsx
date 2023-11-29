/** @format */

import { useEffect, useState } from "react";
import SomeClassesCard from "./SomeClassesCard";
import { Link } from "react-router-dom";

const SomeClasses = () => {
  const [someClasses, setSomeClasses] = useState();
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    fetch("https://tutorio-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setSomeClasses(data);
      });
  }, []);
  return (
    <div>
      <h2 className='text-center text-4xl bg-gradient-to-r from-pink-600 via-blue-600 to-blue-600 text-transparent bg-clip-text'>
        ---<span className=" font-bold">Top Classes</span>---
      </h2>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            isShow ? 
            someClasses?.map(item =><SomeClassesCard key={item._id} item={item}></SomeClassesCard>)
            :
            someClasses?.slice(0,6).map(item =><SomeClassesCard key={item._id} item={item}></SomeClassesCard>)
        }
      </div>
      <div className="flex justify-center items-center mt-5">
        <div  className='relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before: -translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before: transition-all
            
            after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700
            after:border-l-transparent
            after:border-b-transparent
            after:border-r-transparent
            after:opacity-0
            after:transition-all

            hover:before:opacity-100 hover:after:opacity-100
            '
            data-tip='see class'>
        <Link to='/classes'>
        <button
        onClick={() => setIsShow(!isShow)}
            className='btn btn-outline text-pink-600 border-0 border-b-4 border-t-4'>
            {
                isShow ? ' ' : 'See more'
            }
          </button>
        </Link>
        </div>
        </div>
    </div>
  );
};

export default SomeClasses;

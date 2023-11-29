/** @format */

import { useEffect, useState } from "react";
import SomeClassesCard from "./SomeClassesCard";
import { Link } from "react-router-dom";

const SomeClasses = () => {
  const [someClasses, setSomeClasses] = useState();
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
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
      <div className="flex justify-center items-center mt-5" data-aos="fade-down-right">
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
  );
};

export default SomeClasses;

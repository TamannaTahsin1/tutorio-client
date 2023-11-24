/** @format */

import Marquee from "react-fast-marquee";
import img1 from "../../../assets/img/1.png";
import img2 from "../../../assets/img/2.png";
import img3 from "../../../assets/img/3.png";
import img4 from "../../../assets/img/4.png";
import img5 from "../../../assets/img/5.png";
import img6 from "../../../assets/img/6.png";

const Partners = () => {
  return (
    <div>
      <h1 className='text-center text-4xl mt-12 mb-20 font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-gray-500 text-transparent bg-clip-text'>
        Brands
      </h1>

      <div> 
        <Marquee speed={150}>
          <div className='card w-60 bg-base-100 shadow-xl'>
            <figure className='px-10 pt-10'>
              <img
                src={img1}
                alt='Shoes'
                className='rounded-xl w-16'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className='card w-60 bg-base-100 shadow-xl'>
            <figure className='px-10 pt-10'>
              <img
                src={img2}
                alt='Shoes'
                className='rounded-xl w-40'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className='card w-60 bg-base-100 shadow-xl'>
            <figure className='px-10 pt-10'>
              <img
                src={img3}
                alt='Shoes'
                className='rounded-xl w-16'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className='card w-60 bg-base-100 shadow-xl'>
            <figure className='px-10 pt-10'>
              <img
                src={img4}
                alt='Shoes'
                className='rounded-xl w-16'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className='card w-60 bg-base-100 shadow-xl'>
            <figure className='px-10 pt-10'>
              <img
                src={img5}
                alt='Shoes'
                className='rounded-xl w-40'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className='card w-60 bg-base-100 shadow-xl'>
            <figure className='px-10 pt-10'>
              <img
                src={img6}
                alt='Shoes'
                className='rounded-xl w-24'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>

        </Marquee>
      </div>
    </div>
  );
};

export default Partners;

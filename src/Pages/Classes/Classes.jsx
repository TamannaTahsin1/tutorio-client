/** @format */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import slide3 from "../../assets/img/slide3.jpg";
import slide4 from "../../assets/img/slide4.jpg";
import slide5 from "../../assets/img/slide5.jpg";
// import ClassesModal from './ClassesModal';

// modal
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";



const Classes = () => {

 

  return (
    <div>
       <h2 className='my-10 mt-20 text-center text-4xl bg-gradient-to-r from-pink-600 via-blue-600 to-blue-600 text-transparent bg-clip-text'>
        ---<span className=" font-bold">Popular Features</span>---
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='mySwiper'>
        <SwiperSlide>
          <button>
            <div className='card w-80 bg-base-100 shadow-xl'>
              <figure>
                <img src={slide1} alt='Shoes' />
              </figure>
              <div className='card-body text-left'>
                <h2 className='card-title'>
                  Artificial Intelligence
                  <div className='badge badge-secondary'>POPULAR</div>
                </h2>
                <p>Artificial intelligence is a rapidly advancing field.</p>
                <div className='card-actions justify-end'>
                  <div className='badge badge-outline'>Technology</div>
                  <div className='badge badge-outline'>AI</div>
                </div>
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button>
            <div className='card w-80 bg-base-100 shadow-xl'>
              <figure>
                <img src={slide2} alt='Shoes' />
              </figure>
              <div className='card-body text-left'>
                <h2 className='card-title'>
                  Web Development
                  <div className='badge badge-secondary'>POPULAR</div>
                </h2>
                <p>
                  Web development is the process of building and maintaining
                  websites
                </p>
                <div className='card-actions justify-end'>
                  <div className='badge badge-outline'>Technology</div>
                  <div className='badge badge-outline'>Web</div>
                </div>
       
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button>
            <div className='card w-80 bg-base-100 shadow-xl'>
              <figure>
                <img src={slide3} alt='Shoes' />
              </figure>
              <div className='card-body text-left'>
                <h2 className='card-title'>
                Graphics Design
                  <div className='badge badge-secondary'>POPULAR</div>
                </h2>
                <p>Graphic design is the art of visually communicating ideas through images</p>
                <div className='card-actions justify-end'>
                  <div className='badge badge-outline'>Technology</div>
                  <div className='badge badge-outline'>Graphics</div>
                </div>
           
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button>
            <div className='card w-80 bg-base-100 shadow-xl'>
              <figure>
                <img src={slide4} alt='Shoes' />
              </figure>
              <div className='card-body text-left'>
                <h2 className='card-title'>
                Digital Marketing
                  <div className='badge badge-secondary'>POPULAR</div>
                </h2>
                <p>
Digital marketing is the strategic use of online channels.</p>
                <div className='card-actions justify-end'>
                  <div className='badge badge-outline'>Technology</div>
                  <div className='badge badge-outline'>Marketing</div>
                </div>
              
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button>
            <div className='card w-80 bg-base-100 shadow-xl'>
              <figure>
                <img src={slide5} alt='Shoes' />
              </figure>
              <div className='card-body text-left'>
                <h2 className='card-title'>
                App Development
                  <div className='badge badge-secondary'>POPULAR</div>
                </h2>
                <p>App development is the process of creating software applications for mobile devices or desktops</p>
                <div className='card-actions justify-end'>
                  <div className='badge badge-outline'>Technology</div>
                  <div className='badge badge-outline'>App</div>
                </div>
              
              </div>
            </div>
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Classes;

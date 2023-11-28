// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import slide1 from '../../assets/img/slide1.jpg'
import slide2 from '../../assets/img/slide2.jpg'
import slide3 from '../../assets/img/slide3.jpg'
import slide4 from '../../assets/img/slide4.jpg'
import slide5 from '../../assets/img/slide5.jpg'
import ClassesModal from './ClassesModal';
import React from 'react';


const Classes = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
            <h1 className='text-center text-4xl mt-12 mb-20 font-extrabold bg-gradient-to-r from-indigo-500 via-blue-500 to-gray-500 text-transparent bg-clip-text'>
        Popular Features
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
       
        <button onClick={() => handleOpen()}>
        <div className="card w-80 bg-base-100 shadow-xl">      
  <figure><img src={slide1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Artificial Intelligence
      <div className="badge badge-secondary">POPULAR</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
    <div>
    <ClassesModal open={open} handleClose={handleClose}></ClassesModal>
    </div>
  </div>
</div>
        </button>
       
        </SwiperSlide>
        <SwiperSlide>
        <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img src={slide2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Artificial Intelligence
      <div className="badge badge-secondary">POPULAR</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img src={slide3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Artificial Intelligence
      <div className="badge badge-secondary">POPULAR</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img src={slide4} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Artificial Intelligence
      <div className="badge badge-secondary">POPULAR</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img src={slide5} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Artificial Intelligence
      <div className="badge badge-secondary">POPULAR</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Classes;
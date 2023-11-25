
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import ban1 from '../../assets/img/banner1.jpg'
import ban2 from '../../assets/img/banner2.jpg'
import ban3 from '../../assets/img/banner3.jpg'
import ban4 from '../../assets/img/banner4.jpg'
import ban5 from '../../assets/img/banner5.jpg'
import ban6 from '../../assets/img/banner6.jpg'
import ban7 from '../../assets/img/banner7.jpg'

const Banner = () => {
    return (
        <div>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={ban1} className='h-[700px] w-full bg-slate-300 opacity-30' alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={ban2} className='h-[700px] w-full bg-slate-300 opacity-30' alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={ban3} className='h-[700px] w-full bg-slate-300 opacity-30' alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={ban4} className='h-[700px] w-full bg-slate-300 opacity-30' alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={ban5} className='h-[700px] w-full bg-slate-300 opacity-30' alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={ban6} className='h-[700px] w-full bg-slate-300 opacity-30' alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={ban7} className='h-[700px] w-full bg-slate-300 opacity-30' alt="" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;
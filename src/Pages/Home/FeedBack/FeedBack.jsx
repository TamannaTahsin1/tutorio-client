// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating/dist';
import '@smastrom/react-rating/style.css'

const FeedBack = () => {
    const [feedbacks, setFeedbacks] = useState();
    useEffect(() =>{
        fetch('https://tutorio-server.vercel.app/feedback')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setFeedbacks(data)
        })
    },[])
    return (
        <div>
            <div>
                <h2 className='text-center text-4xl text-blue-600 font-bold my-10'>---Feedback---</h2>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      
        {
            feedbacks?.map(feedback =>   <SwiperSlide key={feedback._id}
                
            ><div className='m-'>
                   <Rating style={{ maxWidth: 100 }} value={feedback.rating} readOnly />
                <p>{feedback.details}</p>
                <h3 className='text-2xl text-orange-600'>{feedback.name}</h3></div></SwiperSlide>)
        }
      </Swiper>
        </div>
    );
};

export default FeedBack;
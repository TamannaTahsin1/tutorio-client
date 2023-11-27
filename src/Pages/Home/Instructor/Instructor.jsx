import { Link } from 'react-router-dom';
import img from '../../../assets/img/instructor.jpg'
import { FaArrowRight } from "react-icons/fa";
const Instructor = () => {
  return (
    <div className='flex justify-center items-center my-40'>
            <div className='card w-[800px] card-side bg-base-100 shadow-xl'>
      <figure>
        <img
          src={img}
          className='w-96 h-96'
          alt='human'
        />
      </figure>
      <div className='card-body item-center'>
        <h2 className='card-title'>Be An Instructor</h2>
        <p>We are delighted to extend an invitation to you to join our esteemed team of instructors, bringing your expertise and passion to inspire and educate our students.</p>
        <div className='card-actions justify-start'>
        <Link to='/teach'>
        <button className='btn border-none bg-gradient-to-r hover:from-blue-300 hover:to-blue-700 from-pink-500 to-blue-500 text-white'>Start Teaching Today <FaArrowRight /></button>
        </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Instructor;

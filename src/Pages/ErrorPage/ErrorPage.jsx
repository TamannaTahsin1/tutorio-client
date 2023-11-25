import { Link } from "react-router-dom";
import  errorImg from '../../assets/img/error.png'

const ErrorPage = () => {
    return (
        <div className='my-40'>
        <div className='flex justify-center items-center'>
          <img src={errorImg} alt='' className='w-[500px] h-[500px]' />
        </div>
        <div className='flex justify-center items-center gap-5'>
          <Link to='/'>
            <button className='btn border-none bg-gradient-to-r from-yellow-200 to-yellow-600 hover:from-red-500 hover:to-orange-500 text-white'>
              Go Home
            </button>
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;
import { Link } from "react-router-dom";

const AllClassesCard = ({ allClass }) => {
  const { _id, image, name, title, short_description, total_enrollment, price } =
    allClass || {};
  return (
    <div>
      <div className='card w-96 h-[500px]  bg-base-100 shadow-xl text-white'>
        <figure className='px-10 pt-10'>
          <img src={image} alt={name} className='rounded-xl w-full h-60' />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title text-blue-600'>{title}</h2>
          <p className='text-lg'><span className="font-bold">Price:</span>  ${price}</p>
          <p className='text-sm text-gray-500 font-semibold'>{short_description}</p>
          <p><span className="font-bold">Enrolled:</span>{total_enrollment}</p>
          <div className='card-actions'>
            <Link to={`/details/${_id}`}>
              <button className='btn btn-outline text-blue-500 border-0 border-b-4 border-t-4'>Enroll</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClassesCard;

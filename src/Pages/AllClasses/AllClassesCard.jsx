import { Link } from "react-router-dom";

const AllClassesCard = ({allClass}) => {
    const {id,image ,name, title, short_description, total_enrollment, price} = allClass || {}
    return (
        <div>
            <div className="card w-80 h-[500px]  bg-base-100 shadow-xl text-white">
  <figure className="px-10 pt-10">
    <img src={image} alt={name}  className="rounded-xl w-full h-60" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-blue-600">{title}</h2>
    <p className="text-lg">Price: ${price}</p>
    <p className="text-sm text-white">{short_description}</p>
    <p>{total_enrollment}</p>
    <div className="card-actions">
    <Link to={`/details/${id}`}>
     <button className="btn btn-primary text-white">Enroll</button>
     </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllClassesCard;
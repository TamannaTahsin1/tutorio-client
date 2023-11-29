/** @format */

import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const DetailsCard = ({ classes }) => {
  const { _id, title, teacherName, image, short_description, price } =
    classes || {};
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  // add to cart
  const handleAddToCart = () => {
    if (user && user.email) {
      // send cart item to the database

      const cartItem = {
        classId: _id,
        email: user.email,
        title,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success(`${title}Successfully Added!`);
        }
        // refetch the cart
        refetch();
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please Login To See Your Classes!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className=''>
      <div className='h-[30vh] lg:w-[1000px]'>
        <div
          className='hero'
          style={{
            backgroundImage: `url("${image}")`,
          }}>
          <div className='hero-overlay bg-opacity-60'></div>
          <div className='hero-content text-center text-neutral-content'>
            <div className='max-w-md'>
              <h1 className='mb-5 text-5xl font-bold'>{title}</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='card card-96 card-side bg-base-100 shadow-xl '>
          <figure>
            <img src={image} alt='image' className='w-96 lg:h-96' />
          </figure>
          <div className='card-body'>
            <p className='font-bold text-xl text-blue-600'>---{title}---</p>
            <p>
              <span className='font-bold bg-pink-600 text-white p-2 rounded-md text-sm'>
                Price: ${price}
              </span>
              <span className='font-bold bg-pink-600 text-white p-2 rounded-md ml-4 text-sm'>
                Teacher Name: {teacherName}
              </span>
            </p>

            <p className='font-semibold text-gray-600'>{short_description}</p>
            <div className='card-actions justify-end'>
              <button
                onClick={() => handleAddToCart(classes)}
                className='btn border-none bg-gradient-to-r  from-pink-500 to-blue-500 text-white'>
                Choose
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;

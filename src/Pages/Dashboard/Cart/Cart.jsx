/** @format */

import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  //   for delete button
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className='my-10'>
      <Helmet>
        <title>Tutorio | Cart</title>
      </Helmet>
      <div>
        <h2 className='text-center text-4xl text-blue-600 font-bold'>
          My Enrolled Classes
        </h2>
      </div>
      <div className='text-2xl flex justify-evenly my-10 '>
        <h2>Total Classes: {cart.length}</h2>
        <h2>Total Price: ${totalPrice}</h2>
        {cart.length ? (
          <Link to='/dashboard/payment'>
            <button className='btn bg-gradient-to-r hover:from-blue-300 hover:to-blue-700 from-pink-500 to-blue-500 text-white'>
              Pay now
            </button>
          </Link>
        ) : (
          <button disabled className='btn bg-orange-400 text-white'>
            Pay now
          </button>
        )}
      </div>
      {/* table*/}
      <div className='overflow-hidden'>
        <table className='table mx-5 w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle w-12 h-12'>
                        <img
                          src={item.image}
                          alt='Avatar Tailwind CSS Component'
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.title}
                  <br />
                </td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className='btn btn-ghost btn-lg text-red-600'>
                    <FaTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;

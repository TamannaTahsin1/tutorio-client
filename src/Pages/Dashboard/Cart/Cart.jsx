/** @format */

import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
//   for delete button

  return (
    <div className='my-10'>
      <div className='text-2xl flex justify-evenly my-10 '>
        <h2>Total Classes:{cart.length}</h2>
        <h2>Total Price:{totalPrice}</h2>
        <button className='btn btn-primary'>Pay now</button>
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
            {cart?.map((item,index) => (
              <tr key={item._id}>
                <th>{index+1}</th>
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
                <td>{item.price}</td>
                <th>
                  <button className='btn btn-ghost btn-lg text-red-600'><FaTrashAlt/></button>
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

import useClasses from "../../../Hooks/useClasses";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageClasses = () => {
        const [classes, ,refetch] = useClasses();
        const axiosSecure = useAxiosSecure()

        const handleDeleteItem = (item) =>{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then(async(result) => {
                if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/classes/${item._id}`);
                // console.log(res.data)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                      title: `${item.name} has been Deleted`,
                      text: "Your file has been deleted.",
                      icon: "success",
                    });
                  }
                }
              });
        }
  return (
    <div>
      <h2 className='text-center text-4xl text-orange-600 font-bold p-5'>
        Manage All CLasses
      </h2>
      <div>
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
                <th>
                    #
                </th>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Enrolled</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
           {
            classes?.map((item, index) =>  <tr key={item._id}>
                <th>
                    {index+1}
                </th>
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
                    <div>
                    </div>
                  </div>
                </td>
                <td>
                {item.title}
                </td>
                <td>
                {item.short_description}
                </td>
                <td>{item.price}</td>
                <td>{item.total_enrollment}</td>
                <th>
                <button
                    onClick={() => handleDeleteItem(item)}
                    className='btn btn-ghost btn-sm text-red-600'>
                    Reject
                  </button>
                </th>
              </tr>)
           }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;

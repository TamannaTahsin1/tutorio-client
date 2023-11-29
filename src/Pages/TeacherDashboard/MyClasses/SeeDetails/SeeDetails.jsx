import {
  FaAddressBook,
  FaBookOpen,
  FaPeopleArrows,
  FaPlus,
} from "react-icons/fa";
import Swal from "sweetalert2";

const SeeDetails = () => {
  const handleSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const date = form.date.value;
    const description = form.description.value;

    const newAssignment = {title, date, description}
    console.log(newAssignment);

    // send data to the server
    fetch('https://tutorio-server.vercel.app/assignment',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newAssignment)
    }).then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Assigned Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }

    })
  }
  return (
    <div>
      <div className='flex justify-center items-center h-[50vh]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
          <div className='card w-80 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
            <div className='card-body items-center text-center'>
              <FaPeopleArrows className='text-2xl'></FaPeopleArrows>
              <h2 className='card-title'>Total Enrolled: 278</h2>
            </div>
          </div>
          <div className='card w-80 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white'>
            <div className='card-body items-center text-center'>
              <FaAddressBook className='text-2xl' />
              <h2 className='card-title'>Total Assignment: 9</h2>
            </div>
          </div>
          <div className='card w-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'>
            <div className='card-body items-center text-center'>
              <FaBookOpen className='text-2xl' />
              <h2 className='card-title'>Submitted Assignment: 5</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className='btn btn-wide bg-blue-600 text-white'
          onClick={() => document.getElementById("my_modal_1").showModal()}>
          {" "}
          <FaPlus /> Create
        </button>
        <dialog id='my_modal_1' className='modal'>
          <div className='modal-box'>
            <h3 className='font-bold text-2xl text-center text-blue-500'>
              Assignment
            </h3>
            {/* form */}
            <div
              className='container mx-auto mt-10'
              data-aos='fade-up'
              data-aos-duration='500'>
              <div className=' bg-base-200 p-10 '>
                <form onSubmit={handleSubmit}>
                  {/* form brand name and product name row */}
                  <div className='md:flex gap-3'>
                    <div className='form-control md:w-1/2'>
                      <label className='label'>
                        <span className='label-text'>Title</span>
                      </label>
                      <label className='input-group'>
                        <input
                          name='title'
                          type='text'
                          placeholder='name'
                          className='input input-bordered w-full'
                        />
                      </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                      <label className='label'>
                        <span className='label-text'>Deadline</span>
                      </label>
                      <label className='input-group'>
                        <input
                          name='date'
                          type='date'
                          className='input input-bordered w-full'
                        />
                      </label>
                    </div>
                  </div>
                  <div className='md:flex gap-3 my-5'>
                    <div className='form-control w-full'>
                      <label className='label'>
                        <span className='label-text'>Description</span>
                      </label>
                      <label className='input-group'>
                        <input
                          name='description'
                          type='text'
                          placeholder='assignment name'
                          className='input input-bordered w-full'
                        />
                      </label>
                    </div>
                  </div>
                  <div>
                    <input
                      type='submit'
                      value='Create'
                      className='btn border-none bg-gradient-to-r from-yellow-200 to-yellow-600 hover:from-red-500 hover:to-orange-500 text-white w-full'
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className='modal-action'>
              <form method='dialog'>
                {/* if there is a button in form, it will close the modal */}
                <button className='btn'>Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default SeeDetails;

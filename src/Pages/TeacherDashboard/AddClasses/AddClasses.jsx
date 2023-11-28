import { Helmet } from "react-helmet";


const AddClasses = () => {
    const handleAddClasses = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const image = form.image.value;
        const description = form.description.value;
        const price = form.price.value;
    
        const newTeacher = {
          name,
          email,
          title,
          image,
          description,
          price,
        };
        console.log(newTeacher);
    }
    return (
        <div>
        <Helmet>
          <title>Tutorio | Apply Form</title>
        </Helmet>
        <div
          className='container mx-auto mt-20'
          data-aos='fade-up'
          data-aos-duration='500'>
          <div className=' bg-slate-700 p-20 '>
            <h2 className='text-4xl font-extrabold bg-gradient-to-r from-pink-100 via-blue-500 to-gray-700 text-transparent bg-clip-text text-center mb-10'>
              Apply in Tutorio
            </h2>
            <form onSubmit={handleAddClasses}>
              {/* user name and email */}
              <div className='md:flex gap-3'>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Applicant Name</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='name'
                      type='text'
                      //   defaultValue={user?.displayName}
                      placeholder='name'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Applicant Email</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='email'
                      type='email'
                      //   defaultValue={user?.email}
                      placeholder='email@gmail.com'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
              </div>
              {/* form subject name and image row */}
              <div className='md:flex gap-3'>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Subject Name</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='title'
                      type='text'
                      placeholder='subject name'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Subject Image</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='image'
                      type='text'
                      placeholder='image url'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
              </div>
              {/* form details and price row */}
              <div className='md:flex gap-3'>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>About Subject</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='description'
                      type='text'
                      defaultValue={status}
                      placeholder='Description'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
                <div className='form-control md:w-1/2'>
                  <label className='label'>
                    <span className='label-text'>Price</span>
                  </label>
                  <label className='input-group'>
                    <input
                      name='price'
                      type='text'
                      placeholder='price'
                      className='input input-bordered w-full'
                    />
                  </label>
                </div>
              </div>
              <div>
                <input
                  type='submit'
                  value='Add Class'
                  className='btn border-none bg-gradient-to-r from-pink-500 to-blue-600 hover:from-red-500 hover:to-orange-500 text-white w-full'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddClasses;

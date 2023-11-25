

const DetailsCard = ({classes}) => {
    const {title, teacherName, image, short_description, price } = classes || {};
    return (
        <div className="">
        <div className='card card-96 card-side bg-base-100 shadow-xl '>
          <figure>
            <img src={image} alt='image' className='w-96 h-96' />
          </figure>
          <div className='card-body'>
          <p className='font-bold'>{title}</p>         
            <p>
              <span className='font-bold bg-slate-400 text-black p-2 rounded-md text-sm'>
                Price: ${price}
              </span>
              <span className='font-bold bg-slate-400 text-black p-2 rounded-md ml-4 text-sm'>
              Teacher Name: {teacherName}
              </span>
            </p>
           
            <p>
              <span className='font-bold'></span> {short_description}
            </p>
            <div className='card-actions justify-end'>
              <button className='btn border-none bg-gradient-to-r  from-red-500 to-orange-500 text-white'>
                PAY
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DetailsCard;


// eslint-disable-next-line react/prop-types
const AllClassesCard = ({allClass}) => {
    const {image ,name, title, short_description, total_enrollment, price} = allClass || {}
    return (
        <div>
            <div className="card w-80  bg-base-100 shadow-xl text-white">
  <figure className="px-10 pt-10">
    <img src={image} alt={name}  className="rounded-xl w-full h-60" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p className="text-lg">Price: ${price}</p>
    <p className="text-sm text-white">{short_description}</p>
    <p>{total_enrollment}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Enroll</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllClassesCard;
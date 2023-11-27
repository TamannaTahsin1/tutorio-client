const TeachReqDetails = ({ teacherReq, index, handlePending,handleReject }) => {
  const {_id, name, image, title, category, experience, status } = teacherReq || {};

  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
            {index+1}
        </th>
        <td>
          <div className='flex items-center gap-3'>
            <div className='avatar'>
              <div className='mask mask-squircle w-12 h-12'>
                <img src={image} alt='Avatar Tailwind CSS Component' />
              </div>
            </div>
            
          </div>
        </td>
        <td><div>
              <div className='font-bold'>{name}</div>
            </div></td>
        <td>{title}</td>
        <td>{experience}</td>
        <td>{category}</td>
        <td>
        {  status === 'pending'  
        ? 
        <button className=' text-xs font-semibold text-green-600'>Approved</button>
        : 
        <button onClick={() =>handlePending(_id)} className='btn btn-ghost btn-xs text-yellow-600'>pending</button>
        }
        </td>
        <th>
          <button onClick={() =>handleReject(_id)} className='btn btn-ghost btn-xs text-red-600'>Reject</button>
        </th>
      </tr>
    </>
  );
};

export default TeachReqDetails;

/** @format */

const StudentAssignmentCard = ({assignment, index}) => {
    const {title,date, description } = assignment || {}
  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
            {index+1}
        </th>
        <td>
        {title}
        </td>
        <td>{date}</td>
        <td>{description}</td>
        <th>
          <button className='btn text-green-400 btn-ghost btn-xs'>submit</button>
        </th>
      </tr>
    </>
  );
};

export default StudentAssignmentCard;

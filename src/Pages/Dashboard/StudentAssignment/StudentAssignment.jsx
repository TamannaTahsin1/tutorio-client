/** @format */

import { useLoaderData } from "react-router-dom";
import StudentAssignmentCard from "./StudentAssignmentCard";

const StudentAssignment = () => {
  const assignments = useLoaderData();
  return (
    <div>
      <h2 className='text-center text-4xl text-blue-600 font-bold my-10'>
        My Enrolled Class Details
      </h2>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Title</th>
              <th>Description</th>
              <th>Deadline</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
                {
                    assignments?.map((assignment, index) => <StudentAssignmentCard key={assignment._id} assignment={assignment} index={index}></StudentAssignmentCard>)
                }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentAssignment;

import { useEffect, useState } from "react";
import TeachReqDetails from "./TeachReqDetails";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const TeacherReq = () => {
  //   const teacherReqs = useLoaderData();
  const [teacherReqs, setTeacherReqs] = useState([]);

  useEffect(() => {
    fetch("https://tutorio-server.vercel.app/teach")
      .then((res) => res.json())
      .then((data) => {
        setTeacherReqs(data);
      });
  }, []);
  // reject applicants
  const handleReject = (id) => {
    const proceed = Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(() => {
      if (proceed) {
        fetch(`https://tutorio-server.vercel.app/teach/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "pending" }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = teacherReqs?.filter(
                (teacher) => teacher._id !== id
              );
              const updated = teacherReqs?.find((teacher) => teacher._id === id);
              updated.status = "pending";
              const newTeachers = [updated, ...remaining];
              setTeacherReqs(newTeachers);
            }
          });
      }
    });
  };

  //  approve the pending button
  const handlePending = (id) => {
    fetch(`https://tutorio-server.vercel.app/teach/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "pending" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = teacherReqs?.filter(
            (teacher) => teacher._id !== id
          );
          const updated = teacherReqs?.find((teacher) => teacher._id === id);
          updated.status = "pending";
          const newTeachers = [updated, ...remaining];
          setTeacherReqs(newTeachers);
        }
      });
  };

  return (
    <div>           <Helmet>
    <title>Tutorio | Applicants</title>
  </Helmet>
      <h2 className='text-center text-4xl text-orange-600 font-bold p-5'>
        Manage Applicants
      </h2>
      <div>
        <div className='overflow-x-auto'>
          <table className='table table-zebra'>
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Title</th>
                <th>Experience</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {teacherReqs?.map((teacherReq, index) => (
                <TeachReqDetails
                  key={teacherReq._id}
                  teacherReq={teacherReq}
                  index={index}
                  handleReject={handleReject}
                  handlePending={handlePending}></TeachReqDetails>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherReq;

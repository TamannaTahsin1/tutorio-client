import { FaAddressBook, FaBookOpen, FaPeopleArrows } from "react-icons/fa";

const SeeDetails = () => {
    return (
    <div className="flex justify-center items-center h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            <div className="card w-80 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
  <div className="card-body items-center text-center">
    <FaPeopleArrows className="text-2xl"></FaPeopleArrows>
    <h2 className="card-title">Total Enrolled: 1078</h2>

  </div>
</div>
            <div className="card w-80 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white">
  <div className="card-body items-center text-center">
  <FaAddressBook className="text-2xl" />
    <h2 className="card-title">Total Assignment: 9</h2>

  </div>
</div>
            <div className="card w-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
  <div className="card-body items-center text-center">
  <FaBookOpen className="text-2xl" />
    <h2 className="card-title">Submitted Assignment: 5</h2>
  </div>
</div>
        </div>
    </div>
    );
};

export default SeeDetails;
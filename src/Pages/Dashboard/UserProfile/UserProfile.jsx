import { Helmet } from "react-helmet";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const {user} = useAuth()
    return (
        <div>
                       <Helmet>
        <title>Tutorio | My Profile</title>
      </Helmet>
            <div>
            <div className="hero h-[100vh]" style={{backgroundImage: 'url(../student.jpg)'}}>
  <div className="hero-overlay bg-slate-800 bg-opacity-90"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 font-bold text-5xl bg-gradient-to-r from-blue-100 via-blue-500 to-pink-300 text-transparent bg-clip-text">Welcome {user.displayName}</h1>
      <p className="mb-5 text-gray-500 font-semibold">Effortlessly track student progress, attendance, and communication in one streamlined platform for efficient school management.</p>
      <Link to='/dashboard/cart'>
      <button className="btn bg-gradient-to-r hover:from-blue-300 hover:to-blue-700 from-pink-500 to-blue-500 text-white">Get Started</button>
      </Link>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default UserProfile;

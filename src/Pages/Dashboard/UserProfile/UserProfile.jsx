import { Helmet } from "react-helmet";

const UserProfile = () => {
    return (
        <div>
                       <Helmet>
        <title>Tutorio | My Profile</title>
      </Helmet>
            <h2 className="text-center text-4xl font-bold text-orange-600 p-5">My Profile</h2>
        </div>
    );
};

export default UserProfile;

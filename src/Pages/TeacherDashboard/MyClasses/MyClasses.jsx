import { useLoaderData } from "react-router-dom";
import MyClassesCard from "./MyClassesCard";


const MyClasses = () => {
    const myClasses = useLoaderData()
    return (
        <div>
            <h2 className="text-center text-4xl text-blue-600 font-bold m-5 p-5">My Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-10">
            {
                myClasses?.map(myClass => <MyClassesCard key={myClass._id} myClass={myClass}></MyClassesCard>)
            }
            </div>
        </div>
    );
};

export default MyClasses;
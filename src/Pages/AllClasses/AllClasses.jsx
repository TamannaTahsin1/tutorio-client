import { useLoaderData } from "react-router-dom";
import AllClassesCard from "./AllClassesCard";
import { Helmet } from 'react-helmet-async';

const AllClasses = () => {
    const allClasses = useLoaderData()
    console.log(allClasses)
    return (
        <div>
           <Helmet>
        <title>Tutorio | Classes</title>
      </Helmet>
                  <h1 className='text-center text-4xl mt-12 mb-20 font-extrabold bg-gradient-to-r from-blue-600 via-blue-300 to-gray-300 text-transparent bg-clip-text'>All Classes </h1>
                  <div
        className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {
          
          allClasses?.map((allClass => <AllClassesCard key={allClass.id} allClass={allClass}></AllClassesCard>))
         
        }
      </div>
      
        </div>
    );
};

export default AllClasses;
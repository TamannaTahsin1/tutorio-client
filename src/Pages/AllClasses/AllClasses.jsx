/** @format */

import { useLoaderData } from "react-router-dom";
import AllClassesCard from "./AllClassesCard";
import { Helmet } from "react-helmet-async";

const AllClasses = () => {
  const allClasses = useLoaderData();
  console.log(allClasses);
  return (
    <div className="my-20">
      <Helmet>
        <title>Tutorio | Classes</title>
      </Helmet>

      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {allClasses?.map((allClass) => (
          <AllClassesCard
            key={allClass.id}
            allClass={allClass}></AllClassesCard>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;

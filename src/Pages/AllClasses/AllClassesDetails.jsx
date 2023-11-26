import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const AllClassesDetails = () => {
  const allDetails = useLoaderData();
  console.log(allDetails);
  const {_id } = useParams();
  console.log(_id);
  const [classes, setClasses] = useState();
  useEffect(() => {
    const findClasses = allDetails?.find((detail) => detail._id === _id);
    console.log(findClasses);
    setClasses(findClasses);
  }, [allDetails, _id]);
  return (
    <div className='container mx-auto flex justify-center items-center mt-10'>
      <DetailsCard key={allDetails._id} classes={classes}></DetailsCard>
    </div>
  );
};

export default AllClassesDetails;

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const AllClassesDetails = () => {
    const allDetails = useLoaderData()
    console.log(allDetails)
    const {id} = useParams()
    console.log(id)
    const[classes, setClasses] = useState()
    useEffect(() => {
        const findClasses = allDetails?.find(detail =>detail.id === id)
        console.log(findClasses)
        setClasses(findClasses)
    },[allDetails,id])
    return (
        <div className='container mx-auto flex justify-center items-center mt-10'>
        <DetailsCard
          key={allDetails._id}
          classes={classes}></DetailsCard>
      </div>
    );
};

export default AllClassesDetails;
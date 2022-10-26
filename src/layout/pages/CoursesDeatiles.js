import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';




const CoursesDeatiles = () => {


   
 useEffect(()=>{
  fetch('http://localhost:5000/coursesCategory')
  .then(res=>res.json())
  .then(data=>console.log(data))
 },[])

    return (
        <div>
        
      </div>
      
    );
};

export default CoursesDeatiles;
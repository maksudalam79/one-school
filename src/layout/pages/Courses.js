import React from 'react';
import { useLoaderData } from 'react-router-dom';



const Courses = () => {
const courses=useLoaderData()
console.log(courses)

const {title,details,image_url}=courses
    return (
        <div className="card mb-3 m-5 card-compact w-96 bg-base-100 shadow-xl m-auto">
         
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
   
  </div>
</div>
    );
};

export default Courses;
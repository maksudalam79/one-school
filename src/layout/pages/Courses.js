import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';


const Courses = () => {
const courses=useLoaderData()
console.log(courses)

const {title,details,image_url}=courses
    return (
        <div className="card mb-3 card-compact w-96 bg-base-100 shadow-xl">
         
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
   <div className="card-actions justify-end">
      <button className="btn btn-primary">Go to Primer</button>
    </div>
  </div>
</div>
    );
};

export default Courses;
import { useEffect, useState } from "react";
import {  useLoaderData } from "react-router-dom";
import Card from "./Card";
import CoursesDeatiles from "./CoursesDeatiles";
import Leftside from "./Leftside";


const Courses = () => {
  const category=useLoaderData()
  const [courses,setCourse]=useState([])
  useEffect(()=>{
       fetch("http://localhost:5000/deatiles")
       .then(res=>res.json())
       .then(data=>setCourse(data))
  },[])
  return (
    <div class="grid grid-cols-3 gap-4">
      <div class="">
      <h2>all category:{category.length}</h2>
      {
        category.map(cata=><Leftside
        key={cata.id}
        cata={cata}
        ></Leftside>
        
        )
      }
      </div>
      <div class="col-span-2">
       {
        courses.map(course=><Card
        key={course._id}
        course={course}
        ></Card>)
       }
      </div>
    </div>
  );
};

export default Courses;

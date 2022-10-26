import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CoursesDeatiles from './CoursesDeatiles';



const Leftside = () => {
    const [courses,setCourse]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/coursesCategory')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
    
    
  
    return (
       <div className='pt-6'>
        {
            courses.map(course=><li>
                <Link to={`/courses/${course.id}`}
            key={course.id}
            >{course.name}</Link>
            </li>
                
            )
        }
       </div>
    );
};

export default Leftside;
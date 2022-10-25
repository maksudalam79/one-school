import React, { useEffect, useState } from 'react';


const Leftside = () => {
    const {category,setCategory}=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/coursesCategory')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
  
    return (
        <div>
            <h2>This is Left side Nav</h2>
        </div>
    );
};

export default Leftside;
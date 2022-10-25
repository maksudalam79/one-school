import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';



const Leftside = ({cata}) => {
const {name,id}=cata
    
    
  
    return (
       <li><Link to={`/courses/${id}`}>{name}</Link></li>
    );
};

export default Leftside;
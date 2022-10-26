import React, { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contex/AuthProvider';

const Navber = () => {
    const {user,logOut}=useContext(AuthContext)
  
    const handlarLogOut=()=>{
        logOut()
        .then (()=>{})
        .catch(error=>
            {
                console.error(error)
            })
    }
    
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      </div>
    <a className="btn btn-ghost normal-case text-xl">One School</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/faq'>FaQ</Link></li>
      <li><Link to='/login'>Log In</Link></li>
      
    </ul>
  </div>
  <div className="navbar-end">
    {
        user?.photoURL?
        <img className="w-10 rounded-full mr-2" src={user?.photoURL} />
        :
        <FaUser></FaUser>
    }
  
  {
    user?.uid?
    <>
    <p className='mr-2'>{user?.displayName}</p>
    <button onClick={handlarLogOut} className="btn btn-active btn-ghost">Log out</button>
    </>
    :
    <Link to='/registration' className="btn">Registration</Link>
  }
    
  </div>
</div>
    );
};

export default Navber;
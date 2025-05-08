import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from './AuthProvider/AuthProvider';



const NavBar = () => {

    const {user}=useContext(AuthContext)
console.log(user);

    return (
        <div className="navbar flex justify-between  bg-base-200 shadow-sm">
            
  <div className="">
    <Link to='/' className="btn btn-ghost text-xl">JobTrack</Link>
  </div>

  <div className=''>
    <Link className="font-medium text-sm" to='/review'>Reviews</Link>
  </div>

<div>

  {
        user?   <div className="flex-none">
             

<div className="">

  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
        <Link to='/profile'>
        <img  
        alt="user"
        src={user.photoURL} />
        </Link>
     
    </div>
  </div>
 
</div>
</div> : <div className='flex gap-4 '>  
        <NavLink to='/login'>LogIn</NavLink>
        <NavLink to='/register'>Register</NavLink>
        </div> 
    }

</div>
   
 
</div>
    );
};

export default NavBar;
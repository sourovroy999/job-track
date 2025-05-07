import React from 'react';
import { Link, NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost text-xl">JobTrack</Link>
  </div>

<div className='flex gap-4 mr-6'>
<NavLink to='/login'>LogIn</NavLink>
<NavLink to='/registration'>Registration</NavLink>
</div>
   
  <div className="flex-none">

    <div className="">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt=""
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
     
    </div>
  </div>
</div>
    );
};

export default NavBar;
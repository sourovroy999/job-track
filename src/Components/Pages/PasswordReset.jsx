import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation } from 'react-router';

const PasswordReset = () => {
    const{resetPassword}=useContext(AuthContext)
    const location=useLocation();
    const[email,setEmail]=useState('')

    useEffect(()=>{
        if(location.state?.email){
            setEmail(location.state.email)
        }
    },[location.state])

  

    const handleReset=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        resetPassword(email)
        window.open('https://mail.google.com', '_blank');
       

    }

    return (
        <div className=' min-h-screen flex flex-col  items-center  bg-gray-100 p-4 '>
            <h1 className='font-bold mb-5 '>Reset Your Password</h1>
            <form onSubmit={handleReset}>
            <div>
                  <h1 className='font-medium'>Enter Your Email</h1>
                <input name='email' type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email" className="input my-2 w-[300px]" />
            </div>


            <div className="flex justify-center mt-4">
       <button className="btn btn-error">Password Reset Link</button>
            </div>
            </form>
        </div>
    );
};

export default PasswordReset;
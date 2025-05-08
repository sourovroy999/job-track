import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const PasswordReset = () => {
    const{resetPassword}=useContext(AuthContext)

    // const resetToast=()=>{
    //     toast.success('Password reset link sent')
    // }

    // const resetError=(error)=>{
    //     toast.error(error)
    // }

    const handleReset=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        resetPassword(email)
        // .then(()=>{
        //     resetToast()
        // })
        // .catch((err)=>{
        //     console.log(err.message);
            
        //     resetError(err.message)
        // })

    }

    return (
        <div className=' min-h-screen flex flex-col  items-center  bg-gray-100 p-4 '>
            <h1 className='font-bold mb-5 '>Reset Your Password</h1>
            <form onSubmit={handleReset}>
            <div>
                  <h1 className='font-medium'>Enter Your Email</h1>
                <input name='email' type="email" placeholder="Email" className="input my-2 w-[300px]" />
            </div>


            <div className="flex justify-center mt-4">
       <button className="btn btn-error">Password Reset Link</button>
            </div>
            </form>
        </div>
    );
};

export default PasswordReset;
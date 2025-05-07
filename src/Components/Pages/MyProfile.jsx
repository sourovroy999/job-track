import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useNavigate } from 'react-router';

const MyProfile = () => {
    const{user, signOutUser}=useContext(AuthContext)

    // const naviGate=useNavigate()

    const handleLogOut=()=>{
        signOutUser()
        //  naviGate('/login')
    }


    return (
        <div className='flex flex-col w-fit mx-auto'>
            <h2 className='text-xl font-bold mb-5'>Profile</h2>

            <div >
       
        <img className="w-16 h-16 my-4 flex justify-center object-cover rounded-full"  
        alt="user"
        src={user.photoURL} />
   
     
    </div>

        <div className=''>
            Name: {user.displayName}

        </div>

        <div>
        Email: {user.email}

        </div>

        <button onClick={handleLogOut} className='btn mt-6'>Log Out</button>



        </div>
    );
};

export default MyProfile;
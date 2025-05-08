import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const ProtectedRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation()

    if(loading){
        return <div className='h-screen flex flex-col justify-center items-center '>
            <span className="loading loading-spinner text-success"></span>
        </div> 
    }

    if(user){
        return children
    }
    
    
    return (
       <Navigate to='/login' state={{from:location}} repla />
    );
    
};

export default ProtectedRoute;
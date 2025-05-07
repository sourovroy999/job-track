import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner ml-48 text-center text-success"></span>
    }

    if(user){
        return children
    }
    return (
       <Navigate to='/login'></Navigate>
    );
};

export default ProtectedRoute;
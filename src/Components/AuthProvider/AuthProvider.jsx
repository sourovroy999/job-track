import React, { createContext, useState } from 'react';
import auth from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, } from 'firebase/auth';

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null)
    

    const registerUser=(email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
      



    }

    

    const authInfo={
        registerUser,
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from 'firebase/auth';

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null)
    

    const registerUser=(email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
 }

 const signInUser=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
 }
 const signOutUser=()=>[
    signOut(auth)
    .then(()=>{
        console.log('Sign Out Successfully');
        
    })
    .catch((error)=>{
        console.log(error.message);
        
    })
 ]

    

    const authInfo={
        registerUser,
        user,
        setUser,
        signInUser,
        signOutUser
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser)
            } else{
                setUser(null)
            }
        });

        return(()=>{
            unsubscribe()
        })
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from 'firebase/auth';

export const AuthContext=createContext(null)
const googleProvider= new GoogleAuthProvider();



const AuthProvider = ({children}) => {


    const [user, setUser]=useState(null)

    const [loading, setLoading]=useState(true)

    

    const registerUser=(email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
 }

 const signInUser=(email, password)=>{
    setLoading(true)

    return signInWithEmailAndPassword(auth, email, password)
 }



 const googleSignIn=()=>{
    return signInWithPopup(auth, googleProvider)
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
        signOutUser,
        googleSignIn,
        loading
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser)
        setLoading(false)

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
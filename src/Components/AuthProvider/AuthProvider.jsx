import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth';
import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router';

export const AuthContext=createContext(null)
const googleProvider= new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    // const naviGateUser=useNavigate()

    const [user, setUser]=useState(null)

    const [loading, setLoading]=useState(true)

    const logOutToast=()=>{
        toast('Log Out Successfull', {
            duration: 2000,
            position: 'top-center',
            style: {
                background: 'yellow',
              },
        } )
    }



    

    const registerUser=(email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
 }

 const signInUser=(email, password)=>{
    setLoading(true)

    return signInWithEmailAndPassword(auth, email, password)
 }

 const resetToast=()=>{
    toast.success('Password reset link sent')
}

const resetError=(error)=>{
    toast.error(error)
}
const updateProfileToast=()=>{
    toast.success('Profile updated successfully')
}

 const resetPassword=(email)=>{
    sendPasswordResetEmail(auth,email)
    .then(()=>{
            resetToast()
            
        })
        .catch((err)=>{
            console.log(err.message);
            const errorMessage = err.message;
            console.log(errorMessage);
            
            
            resetError(err.message)
        })

 }

 const updateProfileInside=(name, photo)=>{
    updateProfile(auth.currentUser,{
        displayName:name, 
        photoURL:photo
    })
    .then(()=>{
        updateProfileToast()
        // naviGateUser()

    })
    .catch((error)=>{
        resetError(error.message)
    })
 }


 const googleSignIn=()=>{
    return signInWithPopup(auth, googleProvider)
 }


 const signOutUser=()=>[
    signOut(auth)
    .then(()=>{
        console.log('Sign Out Successfully');
        logOutToast()
        

        
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
        loading,
        resetPassword,
        updateProfileInside
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser)
        setLoading(false)

            } 
            else{
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
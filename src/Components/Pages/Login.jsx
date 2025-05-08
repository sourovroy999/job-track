import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import PasswordReset from './PasswordReset';

const Login = () => {

    const emailRef=useRef()
    

    

    const {signInUser, setUser, googleSignIn}= useContext(AuthContext)


    const [error, setError]=useState('')

    const naviGate=useNavigate()
    const location=useLocation();

    const logInToast=()=>{
        toast.success('log in successfully')
    }

    const handleForgetPassword=()=>{
        const emailGet=emailRef.current.value;
        console.log(emailGet);
        naviGate('/resetpassword', {state:{email:emailGet}})

        
    }

    const handleSignIn=(e)=>{
        e.preventDefault()
        const email= e.target.email.value;
        const password=e.target.password.value;
        

        
        
        

        signInUser(email, password)
        .then((result)=>{
            setUser(result.user);
            
            
            const destination = location.state?.from?.pathname || '/';
                console.log("Redirecting to:", destination);
                naviGate(destination);
                logInToast();
            

       }
       
        )
        .catch(error=>setError(error.message)
        )
    }

    const handleGoogleLogin=()=>{
        googleSignIn()
        .then(()=>{
        
            naviGate(location?.state ? location.state: '/')
            logInToast()

        })
        .catch((err)=>{
            setError(err)
        })

    }


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
         
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
              <fieldset className="fieldset">
                <label  className="label">Email</label>
                <input ref={emailRef} name='email' type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" />
                <Link onClick={()=>handleForgetPassword()} className="link link-hover"> Forgot password? </Link>
                {
                    error? <div className='text-red-400'>{error}</div>  : ''
                }
                <div>
                    Don't have an account? <Link to='/register' className='text-blue-500'>Register</Link>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
               
              </fieldset>
            </form>
            <button onClick={handleGoogleLogin} className='btn mb-3 mx-4 bg-green-500'>Log In With Google</button>

          </div>
        </div>
      </div>
    );
};

export default Login;
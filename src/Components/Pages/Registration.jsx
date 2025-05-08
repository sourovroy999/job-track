import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/Firebase.init';
import toast from 'daisyui/components/toast';


const Registration = () => {

const {registerUser, setUser, googleSignIn}=useContext(AuthContext)

const[error, setError]=useState('')
    const naviGate=useNavigate()

    const registerToast=()=>{
        toast.success('Registration successfull')
    }

    const handleGoogleLogin=()=>{
        googleSignIn()
        .then(()=>{
            naviGate(location?.state ? location.state: '/')
            registerToast()

        })
        .catch((err)=>{
            setError(err.message)
        })

    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const photo=e.target.photo.value;
        const password=e.target.password.value;

       
        if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
            setError('Password must have  -At least one lowercase letter, -At least one lowercase letter, – At least 6 characters total ')
            return;
        }

        registerUser(email, password)
        .then((result)=>{
            setUser(result.user);
            console.log(result.user);
            updateProfile(auth.currentUser, {
                displayName:name,
                photoURL:photo
            }).then(()=>{
                console.log('profile updated');
                naviGate(location?.state ? location.state : '/');
                registerToast()
                
            })
            .catch((error)=>{
                console.log(error.message)
            })
            
        })
       
        


    }

    return (
        <div className='py-6 mx-auto bg-base-200'>
           <h1 className='text-2xl text-center '> Registration Page</h1>

            <form onSubmit={handleSubmit} className=' flex flex-col py-5 items-center '>
                <div>
                    <h1>Name</h1>
                <input name='name' type="text" placeholder="Name" className="input my-2 w-[300px]" />

                </div>
                <div>
                    <h1>Email</h1>
                <input name='email' type="email" placeholder="Email" className="input my-2 w-[300px]" />

                </div>
                <div>
                    <h1>Photo URL</h1>
                <input name='photo' type="text" placeholder="Photo URL" className="input my-2 w-[300px]" />

                </div>
                <div>
                    <h1>Password</h1>
                <input name='password' type="password" placeholder="Password" className="input my-2 w-[300px]" />

                </div>
                <div className=''>
                {
                    error? <div className='text-red-500 my-6 px-4 md:w-md'>{error}</div> : ''
                }
                </div>

                <div className='text-left'>
                    ALready have an account?<Link to='/login' className='text-blue-500'>Login</Link>
                </div>

                <button className='btn btn-wide text-white my-4 btn-info'> Register</button>

            </form>
           
            <button onClick={handleGoogleLogin} className='btn  mx-auto flex justify-center text-white bg-green-500 '>Log In With Google</button>
            
        </div>
    );
};

export default Registration;
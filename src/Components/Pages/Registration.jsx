import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/Firebase.init';
import toast from 'daisyui/components/toast';


const Registration = () => {

const {registerUser, setUser}=useContext(AuthContext)
    const naviGate=useNavigate()

    const registerToast=()=>{
        toast.success('Registration successfull')
    }



    const handleSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const photo=e.target.photo.value;
        const password=e.target.password.value;

        console.log(name, email, photo, password);

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
        <div className=' mx-auto'>
           <h1 className='text-2xl my-8 text-center '> Registration Page</h1>

            <form onSubmit={handleSubmit} className='bg-base-200 flex flex-col py-5 items-center '>
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

                <div className='text-left'>
                    ALready have an account?<Link to='/login' className='text-blue-500'>Login</Link>
                </div>

                <button className='btn btn-wide text-white my-4 btn-info'> Register</button>

            </form>
        </div>
    );
};

export default Registration;
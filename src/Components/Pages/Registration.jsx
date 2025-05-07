import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import auth from '../Firebase/Firebase.init';

const Registration = () => {

const {registerUser}=useContext(AuthContext)


    const handleSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const photo=e.target.photo.value;
        const password=e.target.password.value;

        console.log(name, email, photo, password);

        registerUser(email, password)
        .then((result)=>console.log(result))
        // .then(result=>setUser())
        // createUserWithEmailAndPassword(auth, email, password)
        // .then((result)=>console.log(result)
        // )
        


    }

    return (
        <div className='w-3xl mx-auto'>
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

                <button className='btn btn-wide my-4 btn-info'> Registration</button>

            </form>
        </div>
    );
};

export default Registration;
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router';

const Login = () => {

    const {signInUser, setUser}= useContext(AuthContext)

    const handleSignIn=(e)=>{
        e.preventDefault()
        const email= e.target.email.value;
        const password=e.target.password.value;
        

        signInUser(email, password)
        .then((result)=>{
            setUser(result.user);
       }
       
        )
        .catch(error=>console.log(error.message)
        )
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
         
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <div>
                    Don't have an account? <Link to='/register' className='text-blue-500'>Register</Link>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;
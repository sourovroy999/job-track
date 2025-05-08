import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';


const UpdateProfile = () => {

       useEffect(() => {
                    document.title = ' JobTrack | Update Profile';
                  }, []);

    
    const{updateProfileInside}=useContext(AuthContext)

   


    const handleUpdateProfile=(e)=>{
        e.preventDefault();
        const photo=e.target.photo.value;
        const name=e.target.name.value;
        
        updateProfileInside(name,photo)
           


    }
    return (
        <div className='py-6 mx-auto bg-base-200'>
           <h1 className='text-2xl text-center '> Update Your Profile</h1>

<form onSubmit={handleUpdateProfile} className=' flex flex-col py-5 items-center '>
    
    <div>
        <h1>Name</h1>
    <input required name='name' type="text" placeholder="Name" className="input my-2 w-[300px]" />

    </div>
    <div>
        <h1>Photo URL</h1>
    <input name='photo' type="text" placeholder="Photo URL" className="input my-2 w-[300px]" />

    </div>
<button className='btn bg-blue-400'>Update</button>
    </form>

    </div>


   
    );
};

export default UpdateProfile;
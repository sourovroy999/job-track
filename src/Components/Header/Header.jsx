import React from 'react';
import herobg from '../../assets/herobg.svg'

import herojob from '../../assets/herojob.png'
import loginImg from '../../assets/illustrations/login.svg'
import registrationImg from '../../assets/illustrations/registration.svg'
import selectImg from '../../assets/illustrations/selected.svg'


const Header = () => {
    return (
        <div className='text-white  justify-center items-center' style={{ backgroundImage: `url(${herobg})`,
        transform:'scaleX(-1)'
        }}>
            <div className='flex justify-center -scale-x-100 items-center py-24 px-6'>
                <div><h1 className='text-4xl md:text-7xl mb-5 font-bold'>Job Track</h1>
                    <p>
                        "Connecting Talented Developers with the Right Tech Opportunities."
                    </p>
                    <div className='flex gap-8 mt-8 flex-col md:flex-row'>
                <img className='w-[100px]' src={loginImg} alt="" />
                <img className='w-[100px]' src={registrationImg} alt="" />
                <img className='w-[100px]' src={selectImg} alt="" />
                  </div>

                    
                    </div>
                  
                <div>

                    <img className='w-[500px]' src={herojob} alt="" />
                </div>
            </div>

           
         </div>
    );
};

export default Header;
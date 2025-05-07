import React from 'react';
import herobg from '../../assets/herobg.svg'

import herojob from '../../assets/herojob.png'


const Header = () => {
    return (
        <div className='text-white  justify-center items-center' style={{ backgroundImage: `url(${herobg})`,
        transform:'scaleX(-1)'
        }}>
            <div className='flex justify-center -scale-x-100 items-center py-24'>
                <div><h1 className='text-7xl mb-5 font-bold'>Job Track</h1>
                    <p>
                        "Connecting Talented Developers with the Right Tech Opportunities."
                    </p></div>
                <div>

                    <img className='w-[500px]' src={herojob} alt="" />
                </div>
            </div>
         </div>
    );
};

export default Header;
import React from 'react';
import codeCraftLogo from '../../assets/logo/codecraft logo.png'
import devSolution from '../../assets/logo/Dev Solution.png'
import byteBridge from '../../assets/logo/byte bridge.png'
import techNova from '../../assets/logo/Technova System.png'
import { Link, useLoaderData } from 'react-router';


const Company = ({insideCompany}) => {
    console.log(insideCompany);
    
    const data=useLoaderData()
    console.log(data);
    // const imglogo=data.map()
    const logo1=data[0].logo;
    const logo2=data[1].logo;
    const logo3=data[2].logo;
    const logo4=data[3].logo;

    const logos=data.logo;
    console.log(logos);
    
    
    return (
        <div>
            <h1 className='text-3xl text-center mt-10'>All Company </h1> 

            <div className='flex gap-7 items-center justify-center mt-7 flex-col md:flex-row'>
                <Link to={'/'}><img className='w-20 rounded-full' src={logo1} alt="" /> </Link>
                
          
                <img className='w-20 rounded-full' src={logo2} alt="" />
            
                <img className='w-20 rounded-full' src={logo3} alt="" />
            
                <img className='w-20 rounded-full' src={logo4} alt="" />
            </div>


        </div>
    );
};

export default Company;
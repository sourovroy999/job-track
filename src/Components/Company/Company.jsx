import React from 'react';

import { useLoaderData } from 'react-router';
import CompanySingle from './companySingle';


const Company = () => {

    
    const data=useLoaderData()
    console.log(data);
   
    
    
    return (
        <div>
            <h1 className='text-3xl text-center mt-10'>All Company </h1> 

            <div className='flex gap-7 items-center justify-center mt-7 flex-col md:flex-row'>

                {
                        data.map(singleCompany=> <CompanySingle insideCompany={singleCompany} key={singleCompany.id}></CompanySingle> )
                }

            
              
            </div>


        </div>
    );
};

export default Company;
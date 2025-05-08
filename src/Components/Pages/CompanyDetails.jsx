import React from 'react';

import { useLoaderData, useParams } from 'react-router';
import Jobdetails from '../Company/Jobdetails';


const CompanyDetails = () => {
    const{id}=useParams()
    console.log(id);

   
    const data=useLoaderData()
    console.log(data);

    const job=data.find((p)=> p.id=== id)
    console.log(job);


    const {jobs}=job;
    console.log(jobs);
    
    

    
    
    
    
    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-8'>Available jobs</h1>
            <div className='flex flex-col items-center gap-8 '>
                
                {
                   jobs.map(p=> <Jobdetails key={p.id}
                     fulljob={job} insideJob={p}></Jobdetails>)
                }

            </div>
           
           
        </div>
    );
};

export default CompanyDetails;
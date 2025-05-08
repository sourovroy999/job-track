import React from 'react';
import { Link } from 'react-router';
    

const CompanySingle = ({insideCompany}) => {
    const {id,logo}=insideCompany

   
    return (
        <div>


<Link to={`/company/${id}`}>
            <img className='w-20 rounded-full' src={logo} alt="" />
            </Link>

           
              
        </div>
    );
};

export default CompanySingle;
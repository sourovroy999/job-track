import React, { createContext } from 'react';
import { Link } from 'react-router';
// export const allCompany=createContext(null)
    

const CompanySingle = ({insideCompany}) => {
    // console.log(insideCompany);
    const {id,logo}=insideCompany

    // const values={
    //     insideCompany
    // }
   
    return (
        <div>


<Link to={`/company/${id}`}>
            <img className='w-20 rounded-full' src={logo} alt="" />
            </Link>

            {/* <allCompany.Provider value={values}>
            <Link to={`/company/${id}`}>
            <img className='w-20 rounded-full' src={logo} alt="" />
            </Link>
            </allCompany.Provider> */}
           
              
        </div>
    );
};

export default CompanySingle;
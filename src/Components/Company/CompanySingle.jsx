import React from 'react';
import { Link } from 'react-router';

    

const CompanySingle = ({insideCompany}) => {
    const {id,logo}=insideCompany
    

   
    return (
        <motion.div  whileHover={{scale:1.1}} 
        initial={{scale:0}} animate={{ scale: 1,
        transition:{duration:0.5}
         }} 
        >


<Link to={`/company/${id}`}>
            <img className='w-20 rounded-full' src={logo} alt="" />
            </Link>

           
              
        </motion.div>
    );
};

export default CompanySingle;
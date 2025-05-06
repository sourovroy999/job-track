import React from 'react';
import Header from '../Header/Header';
import Company from '../Company/Company';
import { useLoaderData } from 'react-router';


const Home = () => {
        const data=useLoaderData()
      
 
    
    return (
       <>
       <Header/>
       
       {
        data.map(singleCompany=> <Company insideCompany={singleCompany} key={singleCompany.id}></Company> )
       }
      


       </>
    );
};

export default Home;
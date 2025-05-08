import React from 'react';
import Header from '../Header/Header';
import Company from '../Company/Company';
import NewsletterSignup from '../NewsLetter/NewsletterSignup';
import CallToActionBanner from '../NewsLetter/CallToActionBanner';
// import { useLoaderData } from 'react-router';


const Home = () => {
        // const data=useLoaderData()
      
 
    
    return (
       <>
       <Header/>
       
       
       <Company/>
       <CallToActionBanner/>
       <NewsletterSignup/>
       
      


       </>
    );
};

export default Home;
import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Company from '../Company/Company';
import NewsletterSignup from '../NewsLetter/NewsletterSignup';
import CallToActionBanner from '../NewsLetter/CallToActionBanner';
import Motion from './Motion';
// import { useLoaderData } from 'react-router';


const Home = () => {
        // const data=useLoaderData()
        useEffect(() => {
            document.title = 'Find Jobs | JobTrack';
          }, []);
      
 
    
    return (
       <>
       <Header/>
       <Motion/>
       
       <Company/>
       <CallToActionBanner/>
       <NewsletterSignup/>
       
      


       </>
    );
};

export default Home;
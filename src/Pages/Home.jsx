import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../Components/header/Banner';
import Lawyers from '../Components/Lawyer/Lawyers';
import Gallery from '../Components/Gallery';
import Services from '../Components/Services';
import FAQ from '../Components/FAQ'

const Home = () => {
    const lawyersData = useLoaderData()
   
    return (
        <>
        <Banner></Banner>
          <Services></Services>
        <Lawyers lawyersData={lawyersData}></Lawyers>
         <Gallery></Gallery>
         <FAQ></FAQ>
       
        
      
      </>

    );
};

export default Home;
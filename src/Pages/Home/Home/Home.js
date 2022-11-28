import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import FirstBanner from '../Firstbanner/FirstBanner';
import CategoryCards from '../CategoryCards/CategoryCards';



const Home = () => {
    return (
        <div className='px-5'>
            <FirstBanner></FirstBanner>
            <Banner></Banner>
            <CategoryCards></CategoryCards>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;
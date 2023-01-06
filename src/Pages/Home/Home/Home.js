import React from 'react';
import Banner from '../Banner/Banner';
import FirstBanner from '../Firstbanner/FirstBanner';
import CategoryCards from '../CategoryCards/CategoryCards';
import LastBanner from '../LastBanner/LastBanner';
import BookPosts from '../BookPosts/BookPosts';



const Home = () => {
    return (
        <div className=''>
            <FirstBanner></FirstBanner>
            <Banner></Banner>
            <CategoryCards></CategoryCards>
            <BookPosts></BookPosts>
            <LastBanner></LastBanner>
            
        </div>
    );
};

export default Home;
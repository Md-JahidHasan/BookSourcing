import React from 'react';
import { Link } from 'react-router-dom';
import Chair from '../../../assets/images/chair.png'
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img src="https://images.unsplash.com/photo-1609530029590-b2dc0e8faf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBzZWxsZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" className="w-1/2 rounded-lg shadow-2xl" alt=''/> */}
                <div className="h-96 carousel carousel-vertical rounded-lg">
                    <div className="carousel-item w-full h-full">
                        <img src="https://images.unsplash.com/photo-1609530029590-b2dc0e8faf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBzZWxsZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt=''/>
                    </div>
                    <div className="carousel-item w-full h-full image-full">
                        <img src="https://images.unsplash.com/photo-1494809610410-160faaed4de0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" width={'100%'} alt=''/>
                    </div>
                    <div className="carousel-item w-full h-full">
                        <img src="https://placeimg.com/256/400/arch" width={'100%'} />
                    </div>
                    
                </div>
                <div className='w-1/2'>
                <h1 className="text-5xl font-bold text-primary">Get Your Book At Cheapest Rate Here & Sell Your Old Book!</h1>
                <p className="py-6">The largest used book buying and selling wbsite.</p>
                    <Link to='/signup'><ButtonPrimary>Create Account as Seller</ButtonPrimary></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
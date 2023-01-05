import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';

const Banner = () => {
    return (
        <div className=' bg-gradient-to-r from-secondary to-blue-500 border-t-[10px] border-primary'>
            <div className="h-14 bg-primary mb-0 flex items-center text-3xl font-bold text-secondary w-4/5 md:w-3/5  m-auto rounded-b-[30px] p-8"><marquee className="rounded-b-[30px]">Get 35% discount on new book buying...</marquee></div>
            <div className=" hero py-10">

                <div className="hero-content flex-col md:flex-row-reverse">
                    {/* <img src="https://images.unsplash.com/photo-1609530029590-b2dc0e8faf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBzZWxsZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" className="w-1/2 rounded-lg shadow-2xl" alt=''/> */}
                    <div className="h-96 carousel carousel-vertical rounded-lg">
                        <div className="carousel-item w-full h-full">
                            <img src="https://images.unsplash.com/photo-1609530029590-b2dc0e8faf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBzZWxsZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt='' />
                        </div>
                        <div className="carousel-item w-full h-full image-full">
                            <img src="https://images.unsplash.com/photo-1494809610410-160faaed4de0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" width={'100%'} alt='' />
                        </div>
                        <div className="carousel-item w-full h-full">
                            <img src="https://images.unsplash.com/photo-1572097560317-1189048dac38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJvb2slMjBzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" width={'100%'} />
                        </div>

                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold text-primary">Get Your Book At Cheapest Rate Here & Sell Your Used Book!</h1>
                        <p className="py-6">The largest used book buying and selling wbsite.</p>
                        <Link to='/signup'><ButtonPrimary >Create Account as Seller</ButtonPrimary></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
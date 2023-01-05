import React from 'react';

const FirstBanner = () => {
    return (
        <div className="bg-cover  bg-fixed bg-opacity-20 bg-[url('https://images.unsplash.com/photo-1591951425328-48c1fe7179cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcxfHxib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60')]" >
            <div className=" text-center backdrop-blur-sm h-[450px] flex items-center w-full p-10 md:p-24">
                <div className="">
                    <h1 className="mb-5 text-5xl  font-serif font-extrabold text-primary">Largest New & Used Book Buying & Selling Platform</h1>
                    <p className="mb-5"></p>
                    
                </div>
            </div>
            
        </div>
    );
};
// https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
export default FirstBanner;
import React from 'react';

const ContactUs = () => {
    return (
        <div className='min-h-screen'>
            <div className=' bg-blue-200'>
                <div className=" ">
                    <div className=" ">
    
                        <div className="  w-full max-w-md ">
                            <div className="p-8">
                                <div className="w-full sm:flex p-1">
                                    <input type="text" placeholder="Your Name" className="input input-bordered w-full mr-1 mb-2 md:mb-0" />
                                    <input type="text" placeholder="email" className="input input-bordered w-full" />
                                </div>
                                <div className="w-full p-1">
                                    <input type="text" placeholder="Subject" className="input input-bordered w-full" />
                                </div>
                                <div className="w-full p-1">
                                    <textarea className="textarea textarea-bordered w-full" placeholder="Write Message..."></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-secondary max-w-sm font-bold text-primary">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-pink-100 md:flex'>
                <div className='bg-pink-100 md:w-1/2 h-full p-8'>
                    <h1 className='text-4xl font-bold text-primary py-4'>Get In Touch</h1>
                    <p className='font-bold'>Hey! Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    <p className='py-2'>Porro sed odit non obcaecati impedit quia possimus tempore fugit perspiciatis facilis adipisci molestiae officiis nisi, provident doloribus cumque doloremque autem commodi. </p>
                </div>
                
                <div className='bg-pink-300 md:w-5/12 m-auto h-full  md:relative md:bottom-[160px] text-center rounded-xl py-4'> 
                    <h1 className='text-2xl font-bold py-4 text-primary'>CALL US</h1>
                    <p>111 222 34343</p>
                    <p>000 222 34343</p>
                    <h1 className='text-2xl font-bold pt-4 text-primary'>EMAIL</h1>
                    <p>jahidtex1998@gmail.com</p>
                    <p>md.jahidhasan.tex@gmail.com</p>
                    <h1 className='text-2xl font-bold pt-4 text-primary'>LOCATION</h1>
                    <p>84/A, Rishikesh Das Road,</p>
                    <p>Sutrapur, Dhaka</p>
                </div>
                
            </div>
        </div>
    );
};

export default ContactUs;
import React from 'react';
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';
import bg from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section 
        className='text-center p-20 mt-4' 
        style={{backgroundImage: `url(${bg})`}}>
            <h2 className='text-primary font-bold'>Contact Us</h2>
            <p className='text-3xl mb-2 text-white'>Stay Connected With Us</p>
            <form action="" className='max-w-md m-auto'>
                <input type="text" placeholder="Type here" className="input w-full mb-4" />
                <input type="text" placeholder="Type here" className="input w-full mb-4" />
                <textarea className="textarea w-full" placeholder="Bio"></textarea>
                <ButtonPrimary>Submit</ButtonPrimary>
            </form>
        </section>
    );
};

export default ContactUs;
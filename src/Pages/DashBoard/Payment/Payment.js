import React from 'react';
import { useLoaderbooking, useLoaderData } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51M6CREBmdpOIAhB7eeN7TxCrwg7sUsxBtzlCUr3Q29allk73YQohJSMc0kkKy6kDBRFUAJLrS8wQZwSTWgUxAoeO00ClryFqWd');
console.log(stripePromise);

const Payment = () => {
    const booking =useLoaderData();
    return (
        <div>
            <h2 className='text-3xl font-bold text-secondary text-center'>Payment  for {booking.treatmentName}</h2>
            <p className='text-center  '>Please pay <strong>${booking.price}</strong> for your appointment on <strong>{booking.selectedDate}</strong> at <strong>{booking.slot}</strong></p>
            <div className='w-96 my-6 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm 
                    booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
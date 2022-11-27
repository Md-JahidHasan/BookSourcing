import React, { useContext } from 'react';
import { Navigate, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
             })
            .catch(() => { })
    }
    const error = useRouteError()
    return (
        <div className='flex flex-col items-center justify-center'>
            <p className='text-error text-3xl font-bold mt-40'>Something Went Wrong!!</p>
            <p className='text-4xl text-red-600 font-serif font-bold'>{error.status || error.message}</p>
            <h4 className='text-green-500 text-center m-4'>Please <button className='text-blue-700 font-bold' onClick={handleLogOut}>LogOut</button> <br /> and Log back or go back...</h4>
        </div>
    );
};

export default DisplayError;
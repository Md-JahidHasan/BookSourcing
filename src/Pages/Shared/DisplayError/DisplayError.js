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
        <div>
            <p>Something Went Wrong!!</p>
            <p>{error.status || error.message}</p>
            <h4>Please <button onClick={handleLogOut}>Log Out</button> and Log back in.</h4>
        </div>
    );
};

export default DisplayError;
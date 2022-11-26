import React, { useContext, useState} from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
    const { register, formState:{errors}, handleSubmit } = useForm();
    const { logInUser, user } = useContext(AuthContext);
    const [logInError, setLogInError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    console.log(location.state?.from?.pathname);
    
    const handelLoginSubmit =(data)=>{
        setLogInError('')
        logInUser(data.email, data.password)
        .then(result=>{
            const user= result.user;
            getAccessToken(data.email)
            console.log('Logged',user);
            navigate(from, { replace: true })
        })
        .catch(error=>{
            // console.error(error.message);
            setLogInError(error.message)
        })
    }
    const getAccessToken = (email)=>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if (data.accessToken){
                localStorage.setItem('accessToken', data.accessToken)
            }
        })
    }

    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className="max-w-96 p-8 shadow-xl">
                <h2 className="text-3xl text-center font-bold">Login</h2>
                <form
                    className="text-center"
                    onSubmit={handleSubmit(handelLoginSubmit)}
                >
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", {required:'Email address is required'})}
                            type="text"
                            className="input input-bordered w-full "
                        />
                        {errors.email && <p className="m-1 text-red-600" role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Your password</span>
                        </label>
                        <input
                            {...register("password", {
                                required:'Password is required',
                                minLength:{value:6, message:"password must be six character or more"}
                            })}
                            type="text"
                            className="input input-bordered w-full "
                        />
                        {errors.password && <p className="m-1 text-red-600" role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forgot Password?</span>
                        </label>
                    </div>
                    {
                        logInError && <p className="text-red-600 text-center bg-red-200">{logInError}</p>
                    }
                    <input className="btn btn-primary mt-4 w-full text-white" type="submit" value="LogIn" />
                </form>

                <p className="my-2">New to Doctors Portal? <Link className="text-secondary" to='/signup'>Create New Account</Link></p>
                <div className="divider">OR</div>
                <button className=" btn text-white w-full">Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const {register,formState:{errors} , handleSubmit} = useForm();
    const [seller, setSeller] = useState(false);
    // console.log(seller);
    const { creatUser, updateUser } = useContext(AuthContext);
    const navigte = useNavigate()
    const handleSignUp = (data)=>{
        creatUser(data.email, data.password)
        .then(result=>{
            const user= result.user;
            // console.log(user);
            toast.success('Successfully create user!')
            
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{
                handleUserData(data.name, data.email, seller) 
            })
            .catch((error)=>{
                console.error(error);
            })
        })
        .catch(error=>{
            console.error(error)
        })
    }

    const handleUserData =(name, email, seller)=>{
        const user = {
            name,
            email,
            seller
        };
        fetch('https://twelfth-assignment-server.vercel.app/users', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            getUsertoken(email)
            console.log(data);
        })
    }

    const getUsertoken = (email) =>{
        fetch(`https://twelfth-assignment-server.vercel.app/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            if (data.accessToken){
                localStorage.setItem('accessToken', data.accessToken);
                navigte('/')
            }
        })
    }
    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className=' w-96 text-center'>
                <h1 className='text-3xl font-bold text-primary'>Sign Up</h1>

                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input {...register("name",
                        {required:'Name is required'}
                        )} type="text" className="input input-bordered input-primary " />
                        {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input {...register("email",
                        {required:'Email is required!'}
                        )} type="email" className="input input-bordered input-primary w-full" />
                        {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password",
                        {
                            required:'Password is required!',
                            minLength:{value:6, message:'Password must be 6 character or longer'}
                        },
                        
                        )} type="password" className="input input-bordered input-primary w-full" />
                        {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="flex items-center cursor-pointer">
                            <input type="checkbox" onChange={(event)=>setSeller(event.target.checked)}  className="checkbox checkbox-primary m-2" />
                            <span className="label-text">Create account as seller</span>
                        </label>
                    </div>

                    <input className='btn btn-primary w-full mt-2 text-slate-50' type="submit" value='Sign Up'/>
                </form>
                <p className='mt-2'>Already have an account? <Link to='/login' className='text-primary '>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-secondary w-full text-white'>Continue With GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;
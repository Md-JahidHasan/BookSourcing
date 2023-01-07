import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext)
    const {data: myOrders=[], refetch} = useQuery({
        queryKey:['bookingOrder'],
        queryFn: async ()=>{
            const res = await fetch(`https://twelfth-assignment-server.vercel.app/bookingOrder/${user.email}`);
            const data = res.json();
            return data
        }
    }) 
    console.log({myOrders});
    return (
        <div className='bg-secondary'>
            <h1 className='text-center text-3xl font-bold text-primary p-4'>My Orders</h1>
            <div className=" grid gap-2 p-4">
    
                        {/* <!----------- Order Cart ----------> */}
                        {
                            myOrders.map((order, index) => <div className="card sm:card-side bg-base-200 shadow-xl border-[1px] border-primary">
                                <figure className='h-[200px] lg:w-3/5 border-4 border-base-300'>
                                    <img className='w-full  h-full' src={order.img} alt="Album" />
                                </figure>
                                <div className="card-body w-full p-4 lg:border-l-[1px] border-primary">
                                    <h2 className="card-title text-primary">{order?.productName}</h2>
                                    <h5 className=''>{order?.category}</h5>

                                    <div>
                                        <p>Condition: {order?.yearsOfUse} yrs Used</p>
                                    </div>

                                    <div>

                                        <p>Price: <strong>{order?.productPrice}</strong> tk </p>
                                    </div>
                                    <div className="card-actions justify-end">

                                        <label className="btn btn-sm bg-secondary text-primary border-none hover:bg-primary hover:text-secondary hover:font-bold">
                                            Pay Now
                                        </label>
                                    </div>
                                </div>
                            </div>)
                        }
            </div>
        </div>
    );
};

export default MyOrders;
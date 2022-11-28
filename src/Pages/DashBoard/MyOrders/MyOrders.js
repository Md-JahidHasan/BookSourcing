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
    // console.log({myOrders});
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th className='text-center'>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            myOrders.map((order, index) => <tr
                            key={index}
                            >
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-18 h-18">
                                                <img src={order.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{order.productName}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{order.productPrice}Tk only</td>
                                <th>
                                    <button className="btn btn-success btn-xs">Pay Now</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
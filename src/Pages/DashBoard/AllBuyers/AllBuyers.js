import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { data: buyers=[], refetch } = useQuery({
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch(`https://twelfth-assignment-server.vercel.app/allBuyers`);
            const data = await res.json();
            return data
        }
    })
    console.log('buyers',buyers);
    return (
        <div className='bg-secondary'>
            <h1 className='text-center p-6 text-3xl font-bold text-primary'>All Buyers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full mx-2">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            buyers.map((buyer, index) => <tr
                                className="hover"
                                key={index}
                            >
                                <th>{index + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><button className='btn btn-xs border-none bg-red-700 text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;
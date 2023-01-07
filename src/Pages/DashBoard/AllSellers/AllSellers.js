import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const {data: sellers=[], refetch} = useQuery({
        queryKey:['sellers'],
        queryFn: async()=>{
            const res = await fetch(`https://twelfth-assignment-server.vercel.app/allSellers`);
            const data = await res.json();
            return data
        }
    })
    // console.log(sellers);
    return (
        <div className='bg-pink-200'>
            <h1 className='text-3xl font-bold p-6 text-primary  text-center'>All Sellers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full mx-4">
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
                            sellers.map((seller, index) => <tr
                            className="hover"
                            key={seller._id}
                            >
                                <th>{index+1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button className='btn btn-xs bg-red-700 text-white border-none text-xs'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;
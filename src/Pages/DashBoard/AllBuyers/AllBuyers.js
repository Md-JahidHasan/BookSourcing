import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { data: buyers, refetch } = useQuery({
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch(`https://twelfth-assignment-server.vercel.app/allBuyers`);
            const data = await res.json();
            return data
        }
    })
    console.log(buyers);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                                <td><button className='btn btn-sm bg-red-400 text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext);

    const {data:products=[], refetch} = useQuery({
        queryKey:['sellersProduct'],
        queryFn: async()=>{
            const res =await fetch(`https://twelfth-assignment-server.vercel.app/bookpost/seller/${user?.email}`)
            const data =await res.json();
            return data
        }
    })
    console.log(products);
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            products.map(product => <tr
                            key={product._id}
                            >
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-16 h-16">
                                                <img src={product.bookImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product.bookName}</div>
                                            <div className="text-sm opacity-50">By {product.writer}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Book Category: {product.category}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Condition: {product.bookCondition}</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn bg-red-500 btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProducts;
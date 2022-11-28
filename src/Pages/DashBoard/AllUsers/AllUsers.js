import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const {data: users=[], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res = await fetch(`https://twelfth-assignment-server.vercel.app/allusers`);
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin= id =>{
        fetch(`https://twelfth-assignment-server.vercel.app/allusers/admin/${id}`, {
            method:'PUT',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount>0){
                toast.success('set as admin');
                refetch()
            }
            console.log(data)
        })
    }
    return (
        <div>
            <h2 className='text-2xl font-bold text-primary'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            users.map((user, index) => <tr key={index}>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user?.role ? <button  className='bg-green-500 btn btn-xs text-white'>Already Admin</button> :
                                    <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>
                                    
                                    }</td>
                                <td><button className='btn btn-xs bg-red-500 text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AllUsers;
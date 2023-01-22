import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import 'boxicons'

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
            // console.log(data)
        })
    }
    return (
        <div className='bg-blue-100'>
            <h2 className='text-3xl font-bold text-primary text-center p-6'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full mx-3">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
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
                                <td><button onClick={handleDeleteUser} className='text-red-600 border border-red-700 rounded-full px-1'><i class='bx bxs-trash' ></i></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AllUsers;
import React from 'react';
import { toast } from 'react-hot-toast';

const DeleteUserModal = ({modalOpen, refetch}) => {
    const handleDeleteUser = email => {
        console.log('Click', email);
        fetch(`https://twelfth-assignment-server.vercel.app/deleteUser/${email}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                toast.success('User deleted!');
                refetch()
            })
    }
    console.log(modalOpen);
    return (
        <div className=''>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete {modalOpen.name} ?</h3>
                    <p className="py-4">Are you sure you want to delete the user "{modalOpen.name}"</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn btn-xs bg-green-700 text-white border-none">Not Yet</label>
                        <label onClick={()=>handleDeleteUser(modalOpen.email)} htmlFor="my-modal" className="btn btn-xs bg-red-700 text-white border-none">Confirm Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUserModal;
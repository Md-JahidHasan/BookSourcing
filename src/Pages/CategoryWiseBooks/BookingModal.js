import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { json } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const BookingModal = ({ refetch, modalOpen }) => {
  // const { name, slots, price } = treatment;
  const {user} = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    
    };
    console.log({modalOpen});
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{}</h3>
          <form onSubmit={handleSubmit}>
            

            

            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Full Name"
              className="input input-bordered input-primary w-full mt-2"
            />

            <input
              name="email"
              defaultValue={user?.email}
              disabled
              type="email"
              placeholder="Email"
              className="input input-bordered input-primary w-full mt-2"
            />
            <input
              name="bookName"
              defaultValue={modalOpen?.bookName}
              disabled
              type="text"
              placeholder="Email"
              className="input input-bordered input-primary w-full mt-2"
            />
            <input
              type="submit"
              className="input btn-primary input-primary w-full mt-2"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
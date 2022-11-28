import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { json } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const BookingModal = ({ refetch, modalOpen, setModalOpen }) => {
  // const { name, slots, price } = treatment;
  const {user} = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const productId = modalOpen._id;
    const productName = modalOpen.bookName;
    const productPrice = modalOpen.resalePrice;
    const buyerName = user?.displayName;
    const buyerEmail = user?.email;
    const phone = form.phone.value;
    const location = form.location.value;
    const img = modalOpen.bookImage;
    const bookedOrder = {
      productId,
      productName,
      productPrice,
      buyerName,
      buyerEmail,
      phone,
      location,
      img
    }

    fetch(`https://twelfth-assignment-server.vercel.app/bookingOrder`, {
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(bookedOrder)
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.acknowledged === true){
        toast.success('Your order is Booked!')
        setModalOpen({open:false})
      }
    })
    };

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
              defaultValue={`Name: ${user?.displayName}`}
              disabled
              placeholder="Full Name"
              className="input input-bordered input-primary w-full mt-2 "
            />

            <input
              name="email"
              defaultValue={`Email: ${user?.email}`}
              disabled
              type="email"
              placeholder="Email"
              className="input input-bordered input-primary w-full mt-2"
            />

            <input
              name="bookName"
              defaultValue={`Books Name: ${modalOpen?.bookName}`}
              disabled
              type="text"
              placeholder=""
              className="input input-bordered input-primary w-full mt-2"
            />

            <input
              name="price"
              defaultValue={`Price: ${modalOpen?.resalePrice} tk`}
              disabled
              type="text"
              placeholder=""
              className="input input-bordered input-primary w-full mt-2"
            />

            <input
              name="phone"
              required
              type="text"
              placeholder="Give Your Phone Number"
              className="input input-bordered input-primary w-full mt-2"
            />

            <input
              name="location"
              required
              type="text"
              placeholder="Enter Meeting Location"
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
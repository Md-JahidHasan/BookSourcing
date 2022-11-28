import React from 'react';

const AddAProduct = () => {
    return (
        <div className='border border-secondary m-2 p-4'>
            <h2 className='text-primary font-bold text-2xl text-center'>Add Your Product For Sale</h2>
            <form >


                <input
                    name="name"
                    type="text"
                    defaultValue={`Name: `}
                    disabled
                    placeholder="Full Name"
                    className="input input-bordered input-primary w-full mt-2 "
                />

                <input
                    name="email"
                    defaultValue={`Email: `}
                    disabled
                    type="email"
                    placeholder="Email"
                    className="input input-bordered input-primary w-full mt-2"
                />

                <input
                    name="bookName"
                    defaultValue={`Books Name: `}
                    disabled
                    type="text"
                    placeholder=""
                    className="input input-bordered input-primary w-full mt-2"
                />

                <input
                    name="price"
                    defaultValue={`Price:  tk`}
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
    );
};

export default AddAProduct;
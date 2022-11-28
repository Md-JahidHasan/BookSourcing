import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddAProduct = () => {
    const navigate = useNavigate()
    const {user}= useContext(AuthContext);
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const sellerName = user?.displayName;
        const sellersEmail = user?.email;
        const sellerPhone = form.phone.value;
        const sellerLocation = form.location.value;
        const bookName = form.bookName.value;
        const bookImage = form.bookImage.files[0];
        const category = form.bookCategory.value;
        const writer = form.writer.value;
        const resalePrice = form.resalePrice.value;
        const buyingPrice = form.buyingPrice.value;
        const bookCondition = form.bookCondition.value;
        const usedTime = form.usedTime.value;
        const description = form.description.value;
        const formData = new FormData();
        formData.append('image', bookImage)
        // 05f05d1a8ac14a6c151753334475cf1e
        
        const url = `https://api.imgbb.com/1/upload?key=05f05d1a8ac14a6c151753334475cf1e`

        fetch(url, {
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const postDetail = {
                sellerName,
                sellersEmail,
                sellerPhone,
                sellerLocation,
                bookName,
                bookImage: data.data.display_url,
                category,
                writer,
                resalePrice,
                buyingPrice,
                bookCondition,
                usedTime,
                description
            }
            fetch(`https://twelfth-assignment-server.vercel.app/bookPost`, {
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(postDetail)
            })
            .then(res=>res.json())
            .then(data=>{
                toast.success('Product Added!')
                navigate('/dashboard/myProducts')
            })
            console.log('clicked', postDetail);

        })
        
    }
    return (
        <div className='border border-secondary m-2 p-4'>
            <h2 className='text-primary font-bold text-2xl text-center'>Add Your Product For Sale</h2>
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
                    placeholder="Your Location"
                    className="input input-bordered input-primary w-full mt-2"
                />

                <input
                    name="bookName"
                    
                    
                    type="text"
                    placeholder="Add Book Name"
                    className="input input-bordered input-primary w-full mt-2"
                />
                <input
                    name="bookImage"
                    
                    
                    type="file"
                    placeholder="Add Book Name"
                    className="input input-bordered input-primary w-full mt-2"
                />
                <label className="label">
                    <span className="label-text">Select books category</span>
                </label>
                <select
                    name="bookCategory"
                    className="select select-primary w-full mt-2"
                    placeholder='select Books categoryyy'
                >
                    <option disabled value>Seletct books Category</option>
                    <option>Fiction</option>
                    <option>Non-Fiction</option>
                    <option>Novel</option>
                    <option>Fantasy</option>
                    <option>Historical fiction</option>
                    <option>Horror</option>
                </select>

                <input
                    name="writer"
                    
                    
                    type="text"
                    placeholder="Add Books writer name"
                    className="input input-bordered input-primary w-full mt-2"
                />
                <input
                    name="resalePrice"
                    
                    
                    type="number"
                    placeholder="Resale Price"
                    className="input input-bordered input-primary w-full mt-2"
                />
                <input
                    name="buyingPrice"
                    
                    
                    type="number"
                    placeholder="Buying Price"
                    className="input input-bordered input-primary w-full mt-2"
                />

                <select
                    name="bookCondition"
                    className="select select-primary w-full mt-2"
                >
                    <option disabled selected>Seletct books condition type</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>

                <input
                    name="usedTime"

                    type="number"
                    placeholder="Years Of Use"
                    className="input input-bordered input-primary w-full mt-2"
                />

                <textarea
                name='description'
                className="textarea textarea-primary w-full mt-2" 
                placeholder="Give your product description"
                ></textarea>

                <input
                    type="submit"
                    className="input btn-primary input-primary w-full mt-2"
                ></input>
            </form>
        </div>
    );
};

export default AddAProduct;
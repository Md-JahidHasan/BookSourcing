import React from 'react';

const BookPost = ({bookPost, setModalOpen}) => {
    console.log(bookPost);
    // const {_id, bookName} = bookPost;
    return (
        <div className="card lg:card-side bg-base-200 shadow-xl border-[1px] border-primary ">
            <figure className='h-[300px] lg:w-3/5 border-4 border-white'>
                <img className='w-full  h-full' src={bookPost.bookImage} alt="Album" />
            </figure>
            <div className="card-body w-full p-4 lg:border-l-[1px] border-primary">
                <h2 className="card-title text-primary">{bookPost?.bookName}</h2>
                <p>{bookPost?.writer !== '' || bookPost?.writer !== undefined? `By ${bookPost?.writer}`:"Writer name not given"}</p>
                    <h5 className=''>{bookPost?.category}</h5>
                    
                <div>
                    <p>Buying Price: {bookPost?.originalPrice
                    } tk</p>
                    <p>Condition: {bookPost?.yearsOfUse} yrs Used</p>
                </div>
                
                <div>
                    
                    <p>Price: <strong>{bookPost?.resalePrice}</strong> tk only</p>
                </div>
                <div className="card-actions justify-end">

                    <label onClick={() => setModalOpen({ ...bookPost, open: true })} htmlFor="booking-modal" className="btn btn-sm bg-secondary text-primary border-none hover:bg-primary hover:text-secondary hover:font-bold">
                        Book Now
                    </label>
                </div>
            </div>
        </div>
    );
};

export default BookPost;
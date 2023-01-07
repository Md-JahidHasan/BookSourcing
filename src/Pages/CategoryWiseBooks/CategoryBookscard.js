import React from 'react';
import BookingModal from './BookingModal';


const CategoryBookscard = ({book, setModalOpen}) => {
    // console.log(book);
    return (
        <div className="card sm:card-side bg-base-200 shadow-xl border-[2px] border-primary">
            <figure className='h-[300px] lg:w-3/5 border-4 border-base-300'>
                <img className='w-full  h-full' src={book.bookImage} alt="Album" />
            </figure>
            <div className="card-body w-full p-4 lg:border-l-[2px] border-primary">
                <h2 className="card-title text-primary">{book?.bookName}</h2>
                <p>{book?.writer !== '' || book?.writer !== undefined ? `By ${book?.writer}` : "Writer name not given"}</p>
                <p className=''>{book?.category}</p>

                <div>
                    <p>Buying Price: {book?.originalPrice
                    } tk</p>
                    <p>Condition: {book?.yearsOfUse} yrs Used</p>
                </div>

                <div>

                    <p>Price: <strong>{book?.resalePrice}</strong> tk only</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm bg-secondary text-primary border-none hover:bg-primary hover:text-secondary hover:font-bold">Book Now</button>

                    <label onClick={() => setModalOpen({ ...book, open: true })} htmlFor="booking-modal" className="btn btn-sm bg-secondary text-primary border-none hover:bg-primary hover:text-secondary hover:font-bold">
                        Book Now
                    </label>
                </div>
            </div>
        </div>
    );
};

export default CategoryBookscard;
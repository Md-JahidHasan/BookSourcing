import React from 'react';
import BookingModal from './BookingModal';


const CategoryBookscard = ({book, setModalOpen}) => {
    // console.log(book);
    return (
        <div className="hero m-4 bg-violet-200 shadow-xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src={book.bookImage} className=" rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">{book.bookName}</h1>
                    <h3 className="font-bold">By{book.writer}</h3>
                    <p className=""> Buying Price was {book.originalPrice} tk.</p>
                    <p className="">Selling Price: {book.resalePrice}</p>

                    <p className="">Used time: {book.yearsOfUse}yrs</p>
                    
                    <label onClick={()=>setModalOpen({...book, open: true})} htmlFor="booking-modal" className="btn btn-primary text-white">
                        Book Now
                    </label>


                </div>
            </div>
            {/* <BookingModal
            book={book}
            ></BookingModal> */}
        </div>
    );
};

export default CategoryBookscard;
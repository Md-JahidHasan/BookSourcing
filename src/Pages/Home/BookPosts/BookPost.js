import React from 'react';

const BookPost = ({bookPost}) => {
    console.log(bookPost);
    // const {_id, bookName} = bookPost;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl border-[1px] border-primary">
            <figure className='h-[300px] lg:w-3/5 border-4 border-white'>
                <img className='w-full  h-full' src={bookPost.bookImage} alt="Album" />
            </figure>
            <div className="card-body w-full p-4 lg:border-l-[1px] border-primary">
                <h2 className="card-title text-primary">{bookPost.bookName}</h2>
                <p>{bookPost.category}</p>
                <div>
                    <p></p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default BookPost;
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import CategoryBookscard from './CategoryBookscard';

const CategoryWiseBooks = () => {
    const books = useLoaderData();
    const [modalOpen, setModalOpen] = useState({});
    return (
        <div className='grid grid-cols-2 gap-2 mx-auto'>
            {
                books.map(book => <CategoryBookscard
                key={book._id}
                book={book}
                setModalOpen={setModalOpen}
                ></CategoryBookscard>)
            }
            {
                modalOpen.open && <BookingModal
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                ></BookingModal>
            }
            
        </div>
    );
};

export default CategoryWiseBooks;
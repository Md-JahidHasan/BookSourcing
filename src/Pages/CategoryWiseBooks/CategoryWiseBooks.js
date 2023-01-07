import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import CategoryBookscard from './CategoryBookscard';

const CategoryWiseBooks = () => {
    const books = useLoaderData();
    const [modalOpen, setModalOpen] = useState({});
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-8 text-primary'>All {books[0].category} Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto p-8'>
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
        </div>
    );
};

export default CategoryWiseBooks;
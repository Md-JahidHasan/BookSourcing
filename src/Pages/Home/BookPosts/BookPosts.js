import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';
import BookingModal from './BookingModal';
import BookPost from './BookPost';

const BookPosts = () => {
    const [modalOpen, setModalOpen] = useState({});
    const {data:bookPosts = [], isLoading, refetch} = useQuery({
        queryKey:['bookPosts'],
        queryFn: async () =>{
            const res = await fetch(`https://twelfth-assignment-server.vercel.app/bookPosts`)
            const data = await res.json();
            return data;
        }
    })
    console.log(bookPosts);
    return (
        <div className='p-6 bg-[url("https://images.unsplash.com/photo-1630734277859-c00925b841e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80")] bg-fixed'>
            <h1 className='text-3xl text-center py-6 font-bold text-primary divider'>All Books</h1>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    bookPosts.slice(0, 6).map((bookPost, i) => <BookPost
                    key={i}
                    bookPost={bookPost}
                    setModalOpen={setModalOpen}
                    ></BookPost>)
                }
                {
                    modalOpen.open && <BookingModal
                        modalOpen={modalOpen}
                        setModalOpen={setModalOpen}
                    ></BookingModal>
                }
            </div>
            
            
            <div className='text-center mt-6'>
                <Link to='/allBooks' className='btn btn-sm btn-outline btn-primary'>See More...</Link>
            </div>
        </div>
    );
};

export default BookPosts;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllBook from './AllBook';

const AllBooks = () => {
    const { data: bookPosts = [], isLoading, refetch } = useQuery({
        queryKey: ['bookPosts'],
        queryFn: async () => {
            const res = await fetch(`https://twelfth-assignment-server.vercel.app/bookPosts`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-center text-3xl font-bold text-primary bg-blue-100 p-8'>All Collections</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 bg-[url("https://images.unsplash.com/photo-1621944192380-808416c390e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60")] bg-fixed'>
                {
                    bookPosts.map((bookPost, i) => <AllBook
                        key={i}
                        bookPost={bookPost}
                    ></AllBook>)
                }
            </div>
        </div>
    );
};

export default AllBooks;
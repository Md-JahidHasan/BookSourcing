import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';



const CategoryCards = () => {
    const { data: bookCategories = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch(`https://twelfth-assignment-server.vercel.app/category`,)
            const data = await res.json();
            return data;
        }
    })


    return (
        <div className='text-center p-16 bg-[url("https://images.unsplash.com/photo-1574330096374-a263e0a4b7f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60")] bg-fixed bg-cover border-b-4 border-secondary'>
            <h2 className='font-bold text-lg text-primary'>Categories of Books</h2>
            <p className='text-3xl mb-4 text-secondary  font-bold'>Please select your desired category...</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8'>
                {
                    bookCategories.map((bookCategory, i)=> <CategoryCard
                        key={i}
                        bookCategory={bookCategory}
                    >
                    </CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryCards;
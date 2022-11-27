import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryCards = () => {
    const { data: bookCategories = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:8000/category`,)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='text-center mt-16'>
            <h2 className='font-bold text-primary'>Categories of Books</h2>
            <p className='text-3xl mb-4'>Please select your desired category..</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    bookCategories.map((bookCategory, i)=> <CategoryCard
                        key={i}
                        bookCategory={bookCategory}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryCards;
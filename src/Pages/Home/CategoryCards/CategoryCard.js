import React from 'react';
import { Link } from 'react-router-dom';


const CategoryCard = ({bookCategory}) => {

    return (
        <Link to={`/category/${bookCategory}`} className={`card  drop-shadow-lg  p-4 bg-primary hover:bg-secondary hover:ease-out duration-500  hover:font-bold text-secondary hover:text-primary `}>
            <div className="text-2xl p-2 text-center">
                <h3 className=" text-center ">{bookCategory}</h3>
            </div>
            
        </Link>
        
    );
};

export default CategoryCard;
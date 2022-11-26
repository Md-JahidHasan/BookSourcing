import React from 'react';

const ServiceCard = ({service}) => {
    const {id, title, detail, icon } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img width={`116px`} src={icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h3 className="card-title">{title}</h3>
                <p className='text-sm'>{detail}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
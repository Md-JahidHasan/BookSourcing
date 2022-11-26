import React from 'react';
import Fluoride from '../../../assets/images/fluoride.png'
import Cavity from '../../../assets/images/cavity.png'
import Teeth from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const ServicesPart = () => {
    const services = [
        {
            id:1,
            title:'Fluoride Treatment',
            detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati modi.',
            icon:Fluoride
        },
        {
            id:2,
            title:'Cavity Filling',
            detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati modi.',
            icon:Cavity
        },
        {
            id:3,
            title:'Teeth Whitening',
            detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati modi.',
            icon:Teeth
        },
    ]
    return (
        <div className='text-center mt-16'>
            <h2 className='font-bold text-primary'>OUR SERVICES</h2>
            <p className='text-3xl'>Services We Provide</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service=><ServiceCard
                    key={service.id}
                    service ={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default ServicesPart;
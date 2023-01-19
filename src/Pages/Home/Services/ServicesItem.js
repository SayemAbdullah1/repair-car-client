import React from 'react';

const ServicesItem = ({service}) => {
    const {img, title, price} = service;
    return (
        <div className='mb-6'>
            <img src={img} alt="" className='h-[220px] rounded-xl'/>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p className='text-red-500 font-bold'>Price: ${price}</p>
        </div>
    );
};

export default ServicesItem;
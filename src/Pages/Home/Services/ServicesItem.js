import React from 'react';

const ServicesItem = ({service}) => {
    const {img, title, price} = service;
    return (
        <div className='mb-6 border shadow-lg hover:scale-105 duration-300 rounded-xl'>
            <img src={img} alt="" className='h-[220px] rounded-xl w-full'/>
            <h2 className='text-2xl font-bold ml-2'>{title}</h2>
            <p className='text-red-500 font-bold mb-4 ml-2'>Price: ${price}</p>
        </div>
    );
};

export default ServicesItem;
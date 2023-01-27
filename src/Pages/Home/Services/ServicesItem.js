import React from 'react';
import { Link } from 'react-router-dom';

const ServicesItem = ({service}) => {
    const {img, title, price, _id} = service;
    return (
        <div className='mb-6 border shadow-lg hover:scale-105 duration-300 rounded-xl'>
            <img src={img} alt="" className='h-[220px] rounded-xl w-full'/>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-2xl font-bold ml-2'>{title}</h2>
                    <p className='text-red-500 font-bold mb-4 ml-2'>Price: ${price}</p>
                </div>
                <div className='mr-2 mt-6'>
                    <Link to={`/checkout/${_id}`}><button className="btn btn-active btn-primary btn-sm ">Buy now</button></Link>
                </div>
            </div>

        </div>
    );
};

export default ServicesItem;
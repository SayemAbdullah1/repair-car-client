import React from 'react';

const ProductsCard = ({product}) => {
    const {image, title, price} = product
    return (
        <div className='text-center mb-6 border shadow-lg hover:scale-105 duration-300 rounded-xl'>
            <img src={image} alt="" className='h-[150px] justify-center ml-20 items-center rounded-xl' />
            <h2 className='text-2xl font-bold ml-2'>{title}</h2>
            <p className='text-red-500 font-bold mb-4 ml-2'>Price: ${price}</p>
        </div>
    );
};

export default ProductsCard;
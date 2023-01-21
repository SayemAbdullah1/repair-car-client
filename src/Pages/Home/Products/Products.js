import React from 'react';
import img1 from '../../../assets/images/products/1.png';
import img2 from '../../../assets/images/products/2.png';
import img3 from '../../../assets/images/products/3.png';
import img4 from '../../../assets/images/products/4.png';
import img5 from '../../../assets/images/products/5.png';
import img6 from '../../../assets/images/products/6.png';
import ServicesItem from '../Services/ServicesItem';
import ProductsCard from './ProductsCard';

const Products = () => {
    const products = [
        {
            id: 1,
            image: img1,
            title: 'Car Engine Plug',
            price: '20'
        },
        {
            id: 2,
            image: img2,
            title: 'Car Air Filter',
            price: '30'
        },
        {
            id: 3,
            image: img3,
            title: 'Cools Led Light',
            price: '22'
        },
        {
            id: 4,
            image: img4,
            title: 'Cools Led Light',
            price: '17'
        },
        {
            id: 5,
            image: img5,
            title: 'Cools Led Light',
            price: '25'
        },
        {
            id: 6,
            image: img6,
            title: 'Cools Led Light',
            price: '20'
        },
    ]
    return (
        <div className='mt-32 mb-32'>
            <div className='text-center'>
                <p className='text-red-500 font-bold'>Popular products</p>
                <h2 className='text-5xl font-semibold mt-3 mb-3'>Browse Our Products</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                 words which don't look even slightly believable.  </p>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product => <ProductsCard
                        key={product.id}
                        product={product}
                    ></ProductsCard>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline btn-error">More products</button>
            </div>
        </div>
    );
};

export default Products;
import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData()
    const {title, price} = service;
    // console.log(title);
    const {user} = useContext(authContext)
    return (
        <div className='h-screen'>
                <h2 className='text-4xl mb-6 font-bold'>Check out</h2>
                    <div className='mt-6 mb-6'>
                        <p className='text-4xl'>You are about to {title}</p>
                        <p className='text-3xl'>Price: {price}</p>
                    </div>
            <form>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input type="text" placeholder="First name" className="input input-bordered w-full" />
                    <input type="text" placeholder="Last name" className="input input-bordered w-full" />
                    <input type="text" placeholder="Your phone" className="input input-bordered w-full" />
                    <input type="text" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                </div>
                <textarea className="textarea textarea-bordered h-24 w-full mt-6 mb-6" placeholder="your message"></textarea>
                <button className='btn'>Submit</button>
            </form>
        </div>
    );
};

export default CheckOut;
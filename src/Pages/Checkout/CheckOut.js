import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {user} = useContext(authContext)
    const service = useLoaderData()
    const {title, price, _id} = service;
    
    const handlePlaceOrder = event =>{
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'Unauthorized'
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            phone,
            email,
            message
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Order placed successfully!')
                form.reset()
            }
        })
        .catch(err => console.error(err))

    }
    return (
        <div className='h-screen'>
                <h2 className='text-4xl mb-6 font-bold'>Check out</h2>
                    <div className='mt-6 mb-6'>
                        <p className='text-4xl'>You are about to {title}</p>
                        <p className='text-3xl'>Price: {price}</p>
                    </div>
            <form onSubmit={handlePlaceOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First name" className="input input-bordered w-full" required/>
                    <input name='lastName' type="text" placeholder="Last name" className="input input-bordered w-full" required/>
                    <input name='phone' type="text" placeholder="Your phone" className="input input-bordered w-full" required/>
                    <input name='email' type="text" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                </div>
                <textarea  name='message' className="textarea textarea-bordered h-24 w-full mt-6 mb-6" placeholder="your message"></textarea>
                <button className='btn' type='submit'>Place ypur order</button>
            </form>
        </div>
    );
};

export default CheckOut;
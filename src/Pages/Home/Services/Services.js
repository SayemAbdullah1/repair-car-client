import React, { useEffect, useState } from 'react';
import ServicesItem from './ServicesItem';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } , [])
    return (
        <div className='mt-32'>
            <div className='text-center'>
                <p className='text-red-500 font-bold'>Services</p>
                <h2 className='text-5xl font-semibold mt-3 mb-3'>Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                 words which don't look even slightly believable. </p>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServicesItem
                        key={services.service_id}
                        service={service}
                    ></ServicesItem>)
                }
            </div>
        </div>
    );
};

export default Services;
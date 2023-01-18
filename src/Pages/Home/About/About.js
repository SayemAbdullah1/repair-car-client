import React from 'react';
import img1 from '../../../assets/images/about_us/person.jpg'
import img2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='h-screen flex'>
            <div className='p-2 relative w-1/2'>
                <img className='h-[400px] w-4/5 rounded-lg' src={img1} alt="" />
                <img className='h-[250px] w-3/5 absolute top-[200px] right-5 rounded-lg border-8' src={img2} alt="" />
                </div>

            <div className='w-1/2'>
                <p>About us</p>
                <h2 className='text-2xl'>We are qualified <br /> & of experience <br /> in this field</h2>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import img1 from '../../../assets/images/about_us/person.jpg'
import img2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className=' md:flex mx-auto p-4 mt-32'>
            <div className='p-2 relative lg:w-1/2 sm:w-full'>
                <img className='h-[400px] w-4/5 rounded-lg' src={img1} alt="" />
                <img className='h-[250px] w-3/5 absolute top-[200px] right-5 rounded-lg border-8' src={img2} alt="" />
                </div>

            <div className='lg:w-1/2 lg:pl-12'>
                <p className='text-red-500 font-bold'>About us</p>
                <h2 className='text-5xl font-bold mt-5'>We are qualified <br /> & of experience <br /> in this field</h2>
                <p className='mt-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /> <br />
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
            <button className="btn btn-error">Get more info</button>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import imag from '../../../assets/Image.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-5 mb-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 ml-14'>
                    <img alt='' src={imag} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className="text-2xl text-orange-700 font-bold">About Us</p>
                    <h1 className="text-5xl font-bold">We Are qualifed for made <br /> special food for specail occasion.</h1>
                    <p className="py-6">Making your own meals also allows you to avoid the myriad additives and preservatives that may be found in modern cuisine, allowing you to consume highly nutritious meals instead.</p>
                    <button className="btn btn-primary">Our Services</button>
                </div>
            </div>
        </div>
    );
};

export default About;
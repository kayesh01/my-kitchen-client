import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { title, img, description, price } = useLoaderData();
    return (
        <div className="card card-compact w-100% bg-base-100 shadow-xl">
            <div className='text-center'>
                <p className='text-3xl font-bold text-red-700'>Detaisls and Review section of <span className='text-slate-700'>{title}</span>.</p>
            </div>
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className='font-bold text-2xl'>Price: {price}</p>
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
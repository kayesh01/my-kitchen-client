import React from 'react';

const AllServiceCard = ({ service }) => {
    const { img, price, title, description } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className='text-2xl font-medium'>Price: {price} ৳</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Review</button>
                </div>
            </div>
        </div>
    );
};

export default AllServiceCard;
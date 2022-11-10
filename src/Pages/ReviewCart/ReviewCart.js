import React from 'react';

const ReviewCart = ({ message }) => {
    const { img, name, reviews } = message
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl px-10 mb-5">
            <div className='flex flex-row'>
                <figure><img className='h-10 w-10 rounded-lg' src={img} alt="Shoes" /></figure>
                <h2 className="card-title ml-5">{name}</h2>
            </div>
            <div className="text-center">
                <p>Comment: {reviews}</p>
            </div>
        </div>
    );
};

export default ReviewCart;
import React from 'react';
import { Link } from 'react-router-dom';

const AllServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 200)}....</p>
                <p className='text-2xl font-medium'>Price: {price} ৳</p>
                <div className="card-actions">
                    <Link to={`/service/${_id}`}> <button className="btn btn-primary">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllServiceCard;
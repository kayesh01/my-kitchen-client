import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='h-44 w-44' src={img} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 200)}.....</p>
                <p className='text-2xl font-medium'>Price: {price} ৳</p>
                <div className="card-actions justify-end">
                    <Link to={`/service/${_id}`}>
                        <button className="btn btn-primary">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
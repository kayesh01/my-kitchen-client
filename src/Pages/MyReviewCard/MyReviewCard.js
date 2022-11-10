import React from 'react';

const MyReviewCard = ({ message }) => {
    const { reviews, img, name } = message;
    console.log(message);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{reviews}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">update</button>
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;
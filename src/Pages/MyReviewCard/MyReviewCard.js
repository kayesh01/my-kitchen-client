import React from 'react';

const MyReviewCard = ({ message }) => {
    const { _id, reviews, img, name } = message;
    console.log(message);
    const deleteReview = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Service deleted successfully.')
                }
                console.log(data)
            })
            .catch(er => console.log(er));

    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{reviews}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">update</button>
                    <button onClick={() => deleteReview(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;
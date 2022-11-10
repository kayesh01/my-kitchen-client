import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { _id, title, img, description, price } = useLoaderData();
    const { user } = useContext(AuthContext)
    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const reviews = form.review.value;
        const email = user.email;
        const img = user.photoURL || form.image.value;
        const name = user?.displayName || form.name.value;
        console.log(reviews, email, img, name);
        const review = {
            service: _id,
            reviews,
            email,
            img,
            name
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('review added successfully.')
                }
                form.reset();
                console.log(data)
            })
            .catch(er => console.log(er))


    }
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
            </div>

            <div className='text-center flex flex-col'>
                {
                    user?.uid ?
                        <>
                            <form onSubmit={handleAddReview}>
                                <input name="name" type="text" placeholder="Type your Name." className="input input-bordered input-secondary w-1/4 mb-2" required />
                                <input name="image" placeholder="give image URL" className="input input-bordered input-secondary w-full mb-2" required />
                                <input name="review" type="text" placeholder="Type your review Here." className="input input-bordered input-secondary w-full" required />
                                <input className='btn m-4' type="submit" value="Add your review" />
                            </form>
                        </>
                        :
                        <>
                            <h2 className='text-5xl font-bold m-5'>Please <span className='text-pink-600'><Link to='/login'>Login</Link></span>  to Give review here.</h2>
                        </>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { title, img, description, price } = useLoaderData();
    const { user } = useContext(AuthContext)
    console.log(user);
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
                            <h2 className='text-3xl text-pink-600'>Review section.</h2>
                            <textarea className="textarea textarea-secondary" placeholder="Add Your review Here"></textarea>
                            <button className="btn btn-primary m-2">Add Review</button>
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
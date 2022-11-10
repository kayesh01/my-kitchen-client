import React, { useEffect, useState } from 'react';
import AllServiceCard from './AllServiceCard';

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })

    }, [])
    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <p className='text-5xl font-semibold mb-3'>My service Area.</p>
                <p>I provide various home made food.I only serve food inside Dhaka city. <br /> I also take order foods for various occasion.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4'>
                {
                    services.map(service => <AllServiceCard
                        key={service._id}
                        service={service}
                    ></AllServiceCard>)
                }

            </div>
        </div>
    );
};

export default AllServices;
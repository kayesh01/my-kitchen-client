import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyService = () => {
    const { user } = useContext(AuthContext);
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;
        const email = user?.email || 'unregistered';
        const service = {
            title: title,
            price: price,
            img: image,
            description: description,
        }
        fetch('http://localhost:5000/allservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(er => console.log(er));
    }

    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className='text-3xl font-bold'>Add Your own Service here</h2>
            </div>
            <form onSubmit={handleAddService}>
                <div className='grid md:grid-cols-2 gap-4'>
                    <input name="title" type="text" placeholder="Type Title" className="input input-bordered input-secondary w-full" required />
                    <input name='price' type="text" placeholder="Type price" className="input input-bordered input-secondary w-full" required />
                    <input type="text" placeholder="email" defaultValue={user?.email} className="input input-bordered input-secondary w-full" readOnly />
                    <input name="image" placeholder="give image URL" className="input input-bordered input-secondary w-full" required />
                    <input name="description" type="text" placeholder="Type Description" className="input input-bordered input-secondary w-full" required />
                </div>
                <input className='btn m-4' type="submit" value="Add your Service" />
            </form>
        </div>
    );
};

export default MyService;
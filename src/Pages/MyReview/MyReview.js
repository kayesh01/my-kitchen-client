import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewCard from '../MyReviewCard/MyReviewCard';
import ReviewCart from '../ReviewCart/ReviewCart';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const { email } = user;
    const [message, setMessage] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/reviews/${email}`)
                .then(res => res.json())
                .then(data => {
                    setMessage(data);
                })
        }
    }, [user, email])
    return (
        <div>
            {
                message?.map(mess => <MyReviewCard
                    key={message._id}
                    message={mess}
                ></MyReviewCard>)
            }
        </div>
    );
};

export default MyReview;
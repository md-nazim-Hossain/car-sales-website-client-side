import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    const {isLoading,setIsLoading} = useAuth();

    useEffect(() =>{
        setIsLoading(true)
        fetch('https://agile-caverns-35035.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
        .finally(() =>{
            setIsLoading(false)
        });
    },[setIsLoading]);

    if(isLoading){
        return <div className="text-center p-5 my-5">
                <Spinner animation="grow" />
            </div>
    }

    return (
        <Container>
            <h2 className='py-5 text-center'>Our Customer <span className='common-color'>Reviews</span></h2>
            <Row xs={1} sm={2} md={3} className='g-4 mb-5'>
            {
                reviews.map(review =><Review
                    key ={review._id}
                    review = {review}
                ></Review>)
            }
            </Row>
        </Container>
    );
};

export default Reviews;
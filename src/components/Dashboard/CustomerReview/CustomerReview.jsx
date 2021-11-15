import React, { useState } from 'react';
import { Col,Button, Container, Form, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const CustomerReview = () => {
    const [review,setReview] = useState({});

    const handleReviewField = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...review}
        newReview[field] = value;
        setReview(newReview);
    }

    const handleReview = e=>{
        
        fetch('https://agile-caverns-35035.herokuapp.com/reviews',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert("Successfully Review Added");
            }
        })
        e.pereventDefault();
    };

    return (
        <div id="addCars">
        <Helmet>
            <title>Dashboard -| Review</title>
        </Helmet>
        <Container className='my-3 pb-5'>
            <h2 className='py-3 text-center'>Give <span className='common-color'>Your Review</span></h2>
            <p className='text-muted text-start ps-2 border-left'> red denotes are required</p>
            <Form onSubmit={handleReview}>
                <Row xs={1} sm={1} md={2}>
                    <Col>
                        <Form.Control name="name" onBlur={handleReviewField} placeholder="Your Name" className='mb-3 border-right' required/>
                    </Col>
                    <Col>
                        <Form.Control name="img" onBlur={handleReviewField} placeholder="Image Url" className='mb-3 border-right' required/>
                    </Col>
                    <Col>
                        <Form.Control type='number' name="rating" onBlur={handleReviewField} placeholder="Rating" className='mb-3 border-right' min="1" max="5"  required />
                    </Col>
                    <Col>
                        <Form.Control
                            as="textarea"
                            placeholder="Write Description About Car Related"
                            className='mb-3 border-right'
                            required
                            name="comment"
                            onBlur={handleReviewField}
                            />
                    </Col>
                    <Col>
                        <Button type='submit' className='btn-common common-bg mt-2 btn-hover' variant='transparent'>Add Review</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    </div>
    );
};

export default CustomerReview;
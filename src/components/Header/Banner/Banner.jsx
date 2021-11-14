import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Banner.css';

const Banner = () => {
    return (
        <div className='bg-slider mt-5 pt-3' id="home">
           <div className="overlay">
                <Container className='z-index'>
                    <Row md={2} sm={2}>
                        <Col xm={12} sm={10} md={8}>
                            <div className='d-flex justify-content-center align-items-center py-2'>
                                <div className='pb-5'>
                                    <h3 className='py-5 text-light'><span className="header-super-title pb-4">GET BUY NEW CAR WITH US</span></h3>
                                    <h1 className='header-title common-color common-font'>Purchase Now For</h1>
                                    <h1 className='header-sub-title text-light'> Getting Facilities</h1>
                                    <p className='common-color common-font py-3'>As a society, we love cars. We drive them every day, obsess about their looks and performance, and pine over the latest models and concept vehicles. And some of the best places to learn about cars are online on some of the leading car blogs. You can learn about car safety, check out classic cars, see the best-rated models, and even learn a thing or two about car maintenance and repair on these leading car blogs.</p>
                                    <Button className='btn-common rounded-pill common-bg mt-2 btn-hover' variant='transparent me-5'>Buy Demo</Button>
                                    <HashLink to='/home#services'>
                                        <Button variant='dark' className='btn-common rounded-pill mt-2'>View Our Service</Button>
                                    </HashLink>
                                </div>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
           </div>
        </div>
    );
};

export default Banner;
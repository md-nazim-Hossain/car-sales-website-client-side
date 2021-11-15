import React from 'react';
import { Col, Container, Row,Form,Button } from 'react-bootstrap';
// import notifyimg from '../../../images/img-gallery-07.jpg';

const Notify = () => {
    return (
        <Row xs={1} sm={1} md={2} className='w-100' style={{backgroundColor:'#eee', margin:"0px"}}>
            <Col xs={12} sm={8} md={8}>
                <Container className='ps-5'>
                    <div>
                        <p className='py-5'> <span className='header-super-title pb-4'>GET THE NOTIFICATION FOR LATEST CAR SUBSCRIBE NOW</span></p>
                        <p className='title'>We are Provide <span className='header-title common-color common-font'>Latest Model Car</span></p>
                        <p className='text-muted fs-5'>One of the first things that the reviewer notes about the E-HS9 is just how big it is. In fact, it is 205.1 inches (5,209 mm) long, meaning it is 2.3-inches (58 mm) longer than the BMW X7. Interestingly, its wheelbase is 0.2 inches (5 mm) shorter than the X7.</p>
                        <p className='text-muted fs-5'>The interior of the electric SUV looks extremely premium. The example tested has bright Burgundy-colored leather and a number of lovely wooden pieces of trim. Dominating the dashboard are no less than three 16.2-inch displays consisting of a digital gauge cluster, an infotainment screen, and a passenger media screen. There is then a fourth screen that is dedicated to the climate control functions.</p>
                    </div>
                    <Form>
                        <Row xs={1} sm={1} md={2}>
                            <Col md={8}>
                                <Form.Control type="email" placeholder="Type in your email address" required className='input-bg p-2 ps-4 rounded-pill mt-2'/>
                            </Col>
                            <Col md={4}>
                                <Button className='btn-common rounded-pill common-bg mt-2 me-2 btn-hover' variant='transparent'>Subscriber</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Col>
            <Col>
                <div className='pt-5 mt-2'>
                    <img src='' alt="" className='img-fluid'/>
                </div>
            </Col>
        </Row>
    );
};

export default Notify;
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Contacts = () => {
    return (
        <div style={{backgroundColor:"#d1ccc0"}} className='py-5' id="contact">
            <Container className="p-5 pt-0">
                <h1 className='text-center pb-5'>Contact <span className='common-color'>Us</span></h1>
                <Form>
                    <Row xs={1} sm={1} md={2}>
                        <Col>
                            <p><Form.Control type="text" placeholder="Name" /></p>
                        </Col>
                        <Col>
                           <p> <Form.Control type="email" placeholder="Enter Email" /></p>
                        </Col>
                        <Col>
                            <p><Form.Control type="password" placeholder="Password" /></p>
                        </Col>
                        <Col>
                            <p><Form.Control type="text" placeholder="Phone" /></p>
                        </Col>
                        <Col>
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                />
                        </Col>
                        <Col>
                        <Button type='submit' variant="transparent" className='btn-common common-bg btn-hover' >Send</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default Contacts;
import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import './Footer.css';
import logo from '../../images/Untitled.png';

const Footer = () => {
    return (
        <div className='bg-color-white'>
            <Container className='py-5'>
                <Row xs={1} sm={1} md={3} >
                    <Col className='pt-3'><img src={logo} alt=""/></Col>
                    <Col className='pt-3'>
                        <h3 className='common-color-2'>Our Services</h3>
                        <div className="common-font common-color">
                            <p>Sell New Car</p>
                            <p>Buy Old Car</p>
                            <p>Sell Old Car</p>
                            <p>Repair The Car</p>
                        </div>
                    </Col>
                    <Col className='pt-3 common-font'>
                        <h3 className='common-color-2'>Contact Us</h3>
                        <div className="common-font common-color">
                            <p>
                                <i className="fas fa-envelope"></i> khanakim205@gmail.com
                            </p>
                            <p>
                                <i className="fas fa-phone-alt"></i> +8801929489348
                            </p>
                            <p>
                                <i className="fas fa-map-marker-alt"></i> Nova Tower,Mohakhali,Dhaka,Bangladesh
                            </p>
                        </div>
                        <p className='d-flex'>
                            <Nav.Link href='/'><i className="fab fa-facebook-f social-icon"></i></Nav.Link>
                            <Nav.Link href='/'><i className="fab fa-linkedin-in social-icon"></i></Nav.Link>
                            <Nav.Link href='/'><i className="fab fa-instagram social-icon"></i></Nav.Link>
                            <Nav.Link href='/'><i className="fab fa-youtube social-icon"></i></Nav.Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>  
    );
};

export default Footer;
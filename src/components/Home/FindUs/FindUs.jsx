/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Container } from 'react-bootstrap';

const FindUs = () => {
    return (
        <div id='find'>
            <Container className='py-5'>
                <div>
                    <h1 className='pb-5 text-center'>Find <span className='common-color'>Us</span></h1>
                </div>
                <iframe width='100%' height='500px' src="https://www.google.com/maps?q=Tejgaon%2C%20Dhaka%2C%20Bangladesh&z=14&t=k&ie=UTF8&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>  
            </Container>
        </div>
    );
};

export default FindUs;
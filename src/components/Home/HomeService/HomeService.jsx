import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';

const HomeService = ({service}) => {
    const{_id,name,img,description,category,price} = service;
    const link = `/book/${_id}#booking`;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img} style={{height:'300px'}}/>
                <Card.Body>
                <Card.Title>
                    <h2 className="text-uppercase text-start py-2" style={{color:'orangered'}}>{name}</h2> 
                    <h4 className="common-color">Price: TK {price}</h4>         
                </Card.Title>
                <Card.Text>
                    <div className='text-muted'>
                        <small>{category}</small>
                        <p>{description}</p>
                    </div>
                </Card.Text>
                </Card.Body>
               <div className='d-flex justify-content-center py-3'>
                    <NavHashLink to={link}><Button variant="transparent" className='btn-common common-bg btn-hover' >Buy Now</Button></NavHashLink>
               </div>
            </Card>
        </Col>
    );
};

export default HomeService;
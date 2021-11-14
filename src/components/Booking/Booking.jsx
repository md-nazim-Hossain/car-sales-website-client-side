import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row,Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const [singleCar,setSingleCar] = useState({});
    const {name,category,img,price,description} = singleCar;
    const info = {name:user.displayName,email:user.email,phone:"",address:"",date:"",message:''};
    const [orderInfo,setOrderInfo] = useState(info);

    useEffect(()=>{
        const url =`http://localhost:5000/cars/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleCar(data))
        .finally(() =>{
        });
    },[id]);

    

    const handleChangeName = e =>{
        const name = e.target.value;
        const changeName = {...orderInfo,name:name}
        setOrderInfo(changeName);
    }
    const handleChangeEmail = e =>{
        const email = e.target.value;
        const changeEmail = {...orderInfo,email:email}
        setOrderInfo(changeEmail);
    }

    const handleInfo = e =>{
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = {...orderInfo};
        newInfo[field] = value;
        setOrderInfo(newInfo);
    }

    const handleMyOrder = e =>{

            const buyerInfo = {...orderInfo,carName:name,status:"Pending..."}
       // post data to server
       fetch('http://localhost:5000/buyer',{
           method:"POST",
           headers:{
               "content-type":"application/json"
           },
           body:JSON.stringify(buyerInfo)
       })
       .then(res => res.json())
       .then(data =>{
           if(data.insertedId){
               alert("Welcome "+orderInfo.name+" Your are Successfully Booking");
               setOrderInfo({});
           }
       })

        e.preventDefault();
    }

    return (
        <Container id="booking">
            <Helmet>
                <title>Green Tourism | Booking Now</title>
            </Helmet>
            <Row md={1}>
                <Col xs={12} sm={10} md={7}>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <p className='py-5'> <span className='header-super-title pb-4'>GET THE BOOKING FOR EXCLUSIVE TOUR</span></p>
                            <p className='title'>Booking For<span className='header-title common-color common-font'><br/> World Tour</span></p>
                            <p className='text-muted fs-5'>{description}</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row xm={1} sm={1} md={2} className='py-4'>
                <Col xm={6} sm={6} md={4}>
                   <div className='py-5'>
                        <img src={img} alt="Tour Place Images" className='img-fluid'/>
                        <h2 className="text-center common-color">{category}</h2>
                   </div>
                   <div>
                       <p className='d-flex justify-content-start align-items-center border-bottom py-2'>
                           <div className='pe-5'>
                            <i class="fas fa-rupee-sign fs-1 common-color"></i>
                           </div>
                           <div>
                               <h5>COST OF CAR</h5>
                               <span className='common-color'>${price}</span>
                           </div>
                       </p>
                       <p className='d-flex justify-content-start align-items-center border-bottom py-2'>
                           <div className='pe-5'>
                                <i className="fas fa-mobile-alt fs-1 common-color"></i>
                           </div>
                           <div>
                               <h5>CALL US ANYTIME</h5>
                               <span>0-800-2336-7820</span>
                           </div>
                       </p>
                       <p className='d-flex justify-content-start align-items-center border-bottom py-4'>
                           <div className='pe-5'>
                                <i className="fas fa-map-marker-alt common-color fs-1"></i>
                           </div>
                           <div>
                               <h5>VISIT US ANYTIME</h5>
                               <span>Nova Tower,Mohakhali,Dhaka-1208</span>
                           </div>
                       </p>
                       <p className='d-flex justify-content-start align-items-center border-bottom py-4'>
                           <div className='pe-5'>
                                <i className="far fa-heart fs-1 common-color"></i>
                           </div>
                           <div>
                               <h5>PURCHASE CAR NOW</h5>
                               <span>Click here to Buy Now Button</span>
                           </div>
                       </p>
                   </div>
                </Col>
                <Col xm={6} sm={6} md={8}>
                    <div className='pt-5 ps-4'>
                        <p className='text-muted text-start border-left ps-2'> red denotes are required</p>
                        <Form onSubmit={handleMyOrder}>
                            <Form.Group className="mb-4" controlId="formGroupName">
                                <Form.Label>Your Full Name</Form.Label>
                                <Form.Control name="name" type="text" onChange={handleChangeName} onBlur={handleInfo} value={orderInfo.name} required className='input-bg border-right p-2'/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupCountry">
                                <Form.Label>Car Name</Form.Label>
                                <Form.Control name="carName" type="text" value={name} required className='input-bg border-right p-2' readOnly/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupPassport">
                                <Form.Label>Your Address</Form.Label>
                                <Form.Control name='address' type="text" onBlur={handleInfo} placeholder="Enter Your Address" required className='input-bg border-right p-2'/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" onChange={handleChangeEmail} onBlur={handleInfo} value={orderInfo.email} required className='input-bg border-right p-2'/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupEmail">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control name="phone" type="text" onBlur={handleInfo} placeholder="Phone Number" required className='input-bg border-right p-2'/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupDoctor">
                                <Form.Label>Select Purchase Date</Form.Label>
                                <Form.Control name='date' type="date" onBlur={handleInfo} className='input-bg border-right p-2'/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupDoctor">
                            <Form.Label>Additional Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '120px' }} className='input-bg'
                                onBlur={handleInfo}
                                name='message'
                                />
                            </Form.Group>
                            <Button className='btn-common rounded-pill common-bg mt-2 btn-hover' variant='transparent' type="submit">Buy Now</Button>
                        </Form>
                        <NavHashLink to='/home#services'><Button variant='dark' className='mt-2 rounded-pill'>Back to Service</Button></NavHashLink>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;
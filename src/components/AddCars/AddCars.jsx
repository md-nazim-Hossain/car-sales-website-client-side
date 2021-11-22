import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

const AddCars = () => {
    const [addCar,setAddCar] = useState({});

    const handleField = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newAddCar = {...addCar}
        newAddCar[field] = value;
        setAddCar(newAddCar);
    }

    const handleAddCars = e =>{

        // post data to server
        fetch('https://agile-caverns-35035.herokuapp.com/addCar',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(addCar)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire(
                    'Successfully Added Products!',
                    'add products in your Database!',
                    'success'
                  )
            }
        });

        e.preventDefault();
    }
    return (
        <div id="addCars">
            <Container className='my-3 pb-5'>
                <h2 className='py-2 text-center'>Please Add <span className='common-color'>New Car</span></h2>
                <p className='text-muted text-start ps-2 border-left'> red denotes are required</p>
                <Form onSubmit={handleAddCars}>
                    <Row xs={1} sm={1} md={2}>
                        <Col>
                            <Form.Control name="carName" placeholder="Car Name" onBlur={handleField} className='mb-3 border-right' required/>
                        </Col>
                        <Col>
                            <Form.Control name="price" placeholder="Car Price" onBlur={handleField} className='mb-3 border-right' required/>
                        </Col>
                        <Col>
                            <Form.Control name="category" placeholder="Category Disel/speed" onBlur={handleField} className='mb-3 border-right' required/>
                        </Col>
                        <Col>
                            <Form.Control name="img" placeholder="Car Img Url" onBlur={handleField} className='mb-3 border-right' required/>
                        </Col>
                        <Col>
                            <Form.Control
                                as="textarea"
                                placeholder="Write Description About Car Related"
                                style={{ height: '100px' }}
                                className='mb-3 border-right'
                                required
                                name="description"
                                onBlur={handleField}
                                />
                        </Col>
                        <Col>
                            <Button type='submit' className='btn-common common-bg mt-2 btn-hover' variant='transparent'>Add New Car</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default AddCars;
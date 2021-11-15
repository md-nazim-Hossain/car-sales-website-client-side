import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService';
import useAuth from '../../../hooks/useAuth';

const HomeServices = () => {
    const [cars,setCars] = useState([]);
    const {isLoading,setIsLoading} = useAuth();

    useEffect(() =>{
        setIsLoading(true)
        fetch('https://agile-caverns-35035.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => {
            setCars(data);
        })
        .finally(() =>{
            setIsLoading(false);
        });
    },[setIsLoading]);
    
    if(isLoading){
        return <div className="text-center p-5 my-5">
                <Spinner animation="grow" />
            </div>
    }

    return (
        <div className='bg-white' id="services">
            <Container className="py-5">
            <div className='text-center w-75 py-3 mx-auto'>
                <h1 className='py-2'>Our Brand <span className="common-color common-font">Cars</span></h1>
            </div>
                <Row xs={1} sm={2} md={3} className="g-4">
                    {
                        cars.slice(0,6).map(service => <HomeService
                            key={service._id}
                            service={service}
                        ></HomeService>)
                    }
                    
                </Row>
            </Container>
        </div>
    );
};

export default HomeServices;
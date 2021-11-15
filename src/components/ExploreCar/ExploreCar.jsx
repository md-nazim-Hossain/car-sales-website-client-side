import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useAuth from '../../hooks/useAuth';
import HomeService from '../Home/HomeService/HomeService';

const ExploreCar = () => {
    const [exploreCar,setExploreCar] = useState([]);
    const {isLoading,setIsLoading} = useAuth();

    useEffect(() =>{
        setIsLoading(true)
        fetch('https://agile-caverns-35035.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => {
            setExploreCar(data);
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
        <Container className="py-5" id="services">
            <Helmet>
                <title>Explore-Car -| Rent A Car</title>
            </Helmet>
        <div className='text-center w-75 py-3 mx-auto'>
            <h1 className='py-2'>Our Brand <span className="common-color common-font">All Cars</span></h1>
        </div>
        <Row xs={1} sm={2} md={3} className="g-4">
            {
                exploreCar.map(service => <HomeService
                    key={service._id}
                    service={service}
                ></HomeService>)
            }
            
        </Row>
    </Container>
    );
};

export default ExploreCar;
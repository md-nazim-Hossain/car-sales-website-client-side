import React from 'react';
import { Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import notFound from '../../images/NotFound.jpg'
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="" style={{width:"100%"}}/>
            <div className='text-center pb-5'>
                <NavLink to='/home'>
                    <Button variant='dark'>Back To Home</Button>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;
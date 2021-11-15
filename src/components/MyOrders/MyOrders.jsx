import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [myOrders,setMyOrders] = useState([]);
    const {user} = useAuth();
    const email = user.email;

    useEffect(() =>{
        fetch(`https://agile-caverns-35035.herokuapp.com/myOrders?email=${email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data));
    },[email]);

    if(!myOrders.length){
        return <h2 className='text-center py-5 common-color'>Items Not Found</h2>
    }

    return (
        <div className="mb-5">
            <Helmet>
                <title>Dashboard -| My Orders</title>
            </Helmet>
            <Container>
               <h2 className="py-2 text-center">My <span className="common-color">Orders</span></h2>
                <Table striped bordered hover responsive className='p-2' size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Car Model</th>
                            <th>Gmail</th>
                            <th>Phone No.</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            myOrders.map(order => <MyOrder
                                    key = {order._id}
                                    order = {order}
                                    setMyOrders={setMyOrders}
                                    myOrders={myOrders}
                                    statusId={0}
                            ></MyOrder>)
                        }
                    </tbody>
                </Table>
           </Container>
        </div>
    );
};

export default MyOrders;
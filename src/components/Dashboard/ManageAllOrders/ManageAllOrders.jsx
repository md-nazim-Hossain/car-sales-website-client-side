import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import MyOrder from '../../MyOrder/MyOrder';

const ManageAllOrders = () => {
    const [manageOrders,setManageOrders] = useState([]);

    // get manage all Bookings
    useEffect(() =>{
        fetch(`http://localhost:5000/manageOrders`)
        .then(res => res.json())
        .then(data => setManageOrders(data));
    },[]);

    if(!manageOrders.length){
        return <div className="text-center p-5 my-5">
                <Spinner animation="grow" />
            </div>
    }
    return (
        <div className="mb-5">
            <Helmet>
                <title>Travel & Tour | Manage All Bookings</title>
            </Helmet>
            <Container>
               <h2 className="py-5 text-center">Manage All <span className="common-color">Orders</span></h2>
                <Table striped bordered hover responsive className='p-2' size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Car Model</th>
                            <th>Gmail</th>
                            <th>Phone NO.</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            manageOrders.map(order => <MyOrder
                                    key = {order._id}
                                    order = {order}
                                    setMyOrders={setManageOrders}
                                    myOrders={manageOrders}
                                    statusId={1}
                            ></MyOrder>)
                        }
                    </tbody>
                </Table>
           </Container>
        </div>
    );
};

export default ManageAllOrders;
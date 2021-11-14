import { Button, Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Route, Switch, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import MyOrders from '../../MyOrders/MyOrders';
import CustomerReview from '../CustomerReview/CustomerReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import AddCars from '../../AddCars/AddCars';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import './Dashboard.css';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {signOutClick,admin} = useAuth();
    
    return (
        <div className='dash-bg'>
            <Helmet>
                <title>Dashboard -| Rent A Car</title>
            </Helmet>
           <Row className='g-2'>
               <Col xs={4} sm={5} md={2} className='bg-nav'>
                    <h5 className='common-color text-center py-2'>DASHBOARD</h5>
                    <hr />
                    <div>
                        <NavLink to={`${url}`} className='nav-link p-0'><p className='list'>Payment</p></NavLink>
                        <NavLink to={`${url}/myOrders`} className='nav-link p-0'><p className='list'>My Orders</p></NavLink>
                        <NavLink to={`${url}/customerReview`} className='nav-link p-0'><p className='list'>Review</p></NavLink>
                        {admin && <div>
                            <NavLink to={`${url}/manageOrders`} className='nav-link p-0'><p className='list'>Manage All Orders</p></NavLink>
                            <NavLink to={`${url}/manageProduct`} className='nav-link p-0'><p className='list'>Manage Products</p></NavLink>
                            <NavLink to={`${url}/admin`} className='nav-link p-0'><p className='list'>Make Admin</p></NavLink>
                            <NavLink to={`${url}/addProducts`} className='nav-link p-0'><p className='list'>Add Products</p></NavLink>
                        </div>}
                    </div>
                    <div>
                        <Button onClick={signOutClick} variant='transparent' className='ms-4 mb-5'>Log Out</Button>
                    </div>
               </Col>
               <Col xs={8} sm={7} md={10} className='bg-light'>
                    <div className='m-1'>
                        <Switch>
                            <Route exact path={path}>
                                <Payment></Payment>
                            </Route>
                            <Route path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/customerReview`}>
                                <CustomerReview></CustomerReview>
                            </Route>
                            <AdminRoute path={`${path}/admin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageOrders`}>
                               <ManageAllOrders></ManageAllOrders>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addProducts`}>
                                <AddCars></AddCars>
                            </AdminRoute>
                        </Switch>
                    </div>
               </Col>
           </Row>
        </div>
    );
};

export default Dashboard;
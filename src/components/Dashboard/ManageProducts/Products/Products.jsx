import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/cars')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            console.log(data);
        })
    },[]);

    return (
        <Container className="py-3">
            <Helmet>
                <title>Manage Products -| Rent A Car</title>
            </Helmet>
            <h1 className='py-2 text-center'>Manage All <span className="common-color common-font">Products</span></h1>
        <Row xs={1} sm={2} md={3} className="g-4">
            {
                products.map(product => <Product
                    key={product._id}
                    product = {product}
                    products={products}
                    setProducts={setProducts}
                ></Product>)
            }
            
        </Row>
    </Container>
    );
};

export default Products;
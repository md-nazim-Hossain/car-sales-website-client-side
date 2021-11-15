import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';

const Product = ({product,products,setProducts}) => {
    const{_id,name,img,description,category,price} = product;

    const handleProductDel = id =>{
        const url = `http://localhost:5000/product/${id}`;
        const confirm = window.confirm("Are You Sure You Wanted Deleted ? ");
        if(confirm){
            fetch(url,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    alert("Successfully Deleted");
                    const filter = products.filter(product => product._id !== id);
                    setProducts(filter);
                }
            });
        }
    };

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
                    <Button variant="transparent" onClick={()=>handleProductDel(_id)} className='btn-common common-bg btn-hover' >Delete Product</Button>
               </div>
            </Card>
        </Col>
    );
};

export default Product;
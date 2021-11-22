import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Product = ({product,products,setProducts}) => {
    const{_id,name,img,description,category,price} = product;

    const handleProductDel = id =>{
        const url = `https://agile-caverns-35035.herokuapp.com/product/${id}`;
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success m-2',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => { 
            if(result.isConfirmed){
                fetch(url,{
                    method:"DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        swalWithBootstrapButtons.fire(
                          'Successfully Deleted!',
                          'Your Product has been deleted.',
                          'success'
                        ).then(result =>{
                          if(result.isConfirmed){
                            const filter = products.filter(product => product._id !== id);
                            setProducts(filter);
                          }
                        })
                    }
                });
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary Product is safe :)',
                'error'
              )
            }
          })
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
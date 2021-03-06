import React, { useState } from 'react';
import { Col, Container, Form, Row,Button, Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const {isLoading,setIsLoading} = useAuth();

    const handleEmail = e =>{
        const email = e.target.value;
        setEmail(email);
    };

    const handleAdmin = e =>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success m-2',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be create new admin!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, make admin!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                setIsLoading(true)
                fetch('https://agile-caverns-35035.herokuapp.com/users/admin',{
                    method:'PUT',
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify({email})
                })
                .then(res => res.json())
                .then(data => {
                    if(data.modifiedCount){
                        swalWithBootstrapButtons.fire(
                            'Successfully Created New Admin!',
                            'You Are now new admin.',
                            'success'
                          )
                        setEmail('');
                    }
                    else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'User Not Available!',
                          })
                    }
                })
                .finally(() =>{
                    setIsLoading(false);
                });

            } else if (result.dismiss === Swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary create new Admin is safe :)',
                'error'
              )
            }
          })
        e.preventDefault();
    };

    if(isLoading){
        return <div className="text-center p-5">
            <Spinner animation="grow" />
        </div>
      }

    return (
        <div>
            <Container>
                <Form onSubmit={handleAdmin}>
                    <Row xs={1} sm={1} md={2} className='my-5'>
                        <Col xs={9} sm={8} md={7} >
                            <Form.Control onBlur={handleEmail} type="email" placeholder='Enter New Admin Email' required className='input-bg border-right p-2 mt-2'/></Col>
                        <Col xs={3} sm={4} md={5}>
                            <Button className='btn-common common-bg mt-2 btn-hover' variant='transparent' type="submit">Make Admin</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default MakeAdmin;
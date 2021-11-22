import React, { useState } from 'react';
import { Button,} from 'react-bootstrap';
import Swal from 'sweetalert2';

const MyOrder = ({order,setMyOrders,myOrders,statusId}) => {

    const {_id,name,carName,email,phone,status} = order;
    const [newStatus,setNewStatus] = useState('');
    const [isStatus,setIsStatus] = useState(false);

    // DElete My booking
    const handleMyBookingDel = id =>{
        const url = `https://agile-caverns-35035.herokuapp.com/myOrders/${id}`;
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success m-2',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(result => {
            if(result.isConfirmed){
                fetch(url,{
                    method:"DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        swalWithBootstrapButtons.fire(
                            'Successfully Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                        const filter = myOrders.filter(order => order._id !== id);
                        setMyOrders(filter);
                    }
                });
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire(
                  'Cancelled',
                  'Your imaginary file is safe :)',
                  'error'
                )
            }
        });
    };

    //Status upadeted method
    // https://salty-taiga-78312.herokuapp.com
    const handleStatus = id =>{
        const newBooking = {...order,status:"Shipped"};

        const url = `https://agile-caverns-35035.herokuapp.com/myOrders/${id}`;
        fetch(url,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire(
                    "Your Booking is approved by admin",
                    'Thank You For Booking!',
                    'success'
                  ).then(result =>{
                    if(result.isConfirmed){
                        setNewStatus(newBooking.status);
                        setIsStatus(true)
                     }
                  })
                 
            }
        })
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{carName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                <div className="text-center">
                    <Button variant='transparent' className="text-center" onClick={()=>handleMyBookingDel(_id)}><i className="far fa-trash-alt fs-4 text-danger"></i></Button>
                </div>
            </td>
            <td>
                <div className="text-center">
                    {statusId ? <Button variant="warning" className="text-center text-light" onClick={()=>handleStatus(_id)}>{!isStatus ? status : newStatus}</Button>
                    :<p className='text-center text-light bg-success mt-2 rounded p-1'>{status}</p>
                    }
                </div>
            </td>
        </tr>
    );
};

export default MyOrder;
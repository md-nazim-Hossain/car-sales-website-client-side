import React from 'react';
import { Button,} from 'react-bootstrap';

const MyOrder = ({order,setMyOrders,myOrders,statusId}) => {

    const {_id,name,carName,email,phone,status} = order;

    // DElete My booking
    const handleMyBookingDel = id =>{
        const url = `http://localhost:5000/myOrders/${id}`;
        const confirm = window.confirm("Are You Sure You Wanted Deleted ? ");
        if(confirm){
            fetch(url,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    alert("Successfully Deleted");
                    const filter = myOrders.filter(order => order._id !== id);
                    setMyOrders(filter);
                }
            });
        }
    };

    //Status upadeted method
    // https://salty-taiga-78312.herokuapp.com
    const handleStatus = id =>{
        const newBooking = {...order,status:"Shipped"};

        const url = `http://localhost:5000/myOrders/${id}`;
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
                alert("Your Booking is approved by admin");
                window.location.reload();
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
                    {statusId ? <Button variant="warning" className="text-center text-light" onClick={()=>handleStatus(_id)}>{status}</Button>
                    :<p className='text-center text-light bg-success mt-2 rounded p-1'>{status}</p>
                    }
                </div>
            </td>
        </tr>
    );
};

export default MyOrder;
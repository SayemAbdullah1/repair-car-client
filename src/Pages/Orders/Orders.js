import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user} = useContext(authContext)
    const [orders, setOrders] = useState([])

    useEffect( ()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = id =>{
        const processd = window.confirm('Are you sure, you want to delete!')
        if(processd){
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount){
                    alert('Deleted seccessfull')
                    const remaining = orders.filter(odr => odr._id !== id)
                    setOrders(remaining)
                }
            })
        }
    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrderRow
                        key={order._id}
                        order={order}
                        handleDelete = {handleDelete}
                        ></OrderRow>)
                    }
                </tbody>
               

            </table>
        </div>
    );
};

export default Orders;
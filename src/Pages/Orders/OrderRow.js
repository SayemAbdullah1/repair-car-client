import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const OrderRow = ({ order, handleDelete, handleUpdate }) => {
    const { _id, serviceName, customer, phone, email, price, service } = order
    const [orderService, setOrderservice] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res=> res.json())
        .then(data=> setOrderservice(data))
    }, [service])



    return (
           
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded w-12 h-12">
                                {
                                    orderService.img && 
                                    <img src={orderService.img } alt="Avatar Tailwind CSS Component" />
                                }
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customer}</div>
                            <div className="text-sm opacity-50">{phone}</div>
                        </div>
                    </div>
                </td>
                <td>
                <span className='font-bold'> {serviceName}</span>
                    <br />
                <span className="badge badge-ghost badge-sm">Price: <span className='font-bold'> ${price}</span></span>
                </td>
            <td><button onClick={() => handleUpdate(_id)} className="btn btn-warning btn-sm">Update</button></td>
                <th>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-error btn-sm">Delete</button>
                </th>
            </tr>
    );
};

export default OrderRow;
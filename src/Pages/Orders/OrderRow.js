import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const OrderRow = ({ order, handleDelete }) => {
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
                    {serviceName}
                    <br />
                    <span className="badge badge-ghost badge-sm">{price}</span>
                </td>
                <td>{email}</td>
                <th>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
                </th>
            </tr>
    );
};

export default OrderRow;
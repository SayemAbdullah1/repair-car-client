import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(authContext)
    const location = useLocation()
    if(loader){
        return <h2 className='text-4xl'>Loading</h2>
    }
    if(user){
        return children
    }
    return <Navigate state={{from: location}} replace></Navigate>
    
};

export default PrivateRoute;
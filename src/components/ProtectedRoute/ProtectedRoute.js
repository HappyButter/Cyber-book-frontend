import React from 'react';
import { Navigate  } from 'react-router-dom';


const ProtectedRoute = ({element: Component, auth}) => {
    return auth 
        ? <Component /> 
        : <Navigate to='/login' />
};

export default ProtectedRoute;
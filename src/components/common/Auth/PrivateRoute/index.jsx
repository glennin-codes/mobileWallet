// PrivateRoute.js
import React from 'react';
import {  Navigate } from 'react-router-dom';
import { useAuth } from '../../../../../utils/Hook/AuthHook'

const PrivateRoute = ({ children }) => {
 const isAuthenticated = useAuth();
  
    if (!isAuthenticated){
          return <Navigate to='/'/>

    }
    return (
      children);
    

};

export default PrivateRoute;
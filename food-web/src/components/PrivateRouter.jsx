import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRouter({ children }) {
  const token = useSelector((state) => state.auth.token); // Access token from Redux state
  return token ? children : <Navigate to="/login" />;
}

export default PrivateRouter;
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const { data } = useSelector((state) => state.user);
  if (data === null) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
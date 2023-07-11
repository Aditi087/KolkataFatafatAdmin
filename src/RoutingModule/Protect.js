import React from 'react';
import { Navigate } from 'react-router-dom';

export const Protect = ({ children }) => {
  let isLoggedIn = window.localStorage.getItem('token');
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export const LoginProtected = ({ children }) => {
  let isLoggedIn = window.localStorage.getItem('token');

  return !isLoggedIn ? children : <Navigate to="/" />;
};
// export default Protect;

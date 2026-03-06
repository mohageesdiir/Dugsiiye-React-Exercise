import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    login();
    const from = location.state?.from?.pathname || '/';
    navigate(from, { replace: true });
  };

  return (
    <div className='flex flex-col w-7xl mt-3 m-auto bg-white shadow-md rounded-md p-4 '>
      <h2 className='text-bold text-xl '>Login</h2>
      <p>You must log in to access the Create Post page.</p>
      <button className='bg-blue-500 px-4 py-2 w-25 rounded-md cursor-pointer' onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login; 
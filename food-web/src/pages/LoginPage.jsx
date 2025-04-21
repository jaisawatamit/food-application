// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // 👈 import Link
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { loginUser } from '../redux/authSlice';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(import.meta.env.VITE_BASE_URL + '/user/login', {
        email,
        password,
      });
  
      console.log('Response from server:', response.data); // Log to inspect response
  
      // Check if the data contains what we expect
      if (response.data && response.data.token && response.data.email && response.data._id) {
        const { token, email, _id, name } = response.data;
        const user = { email, _id, name }; 
  
        // localStorage.setItem('token', token);
        // localStorage.setItem('user', JSON.stringify(user));
  
        dispatch(loginUser({ token, user }));
  
        toast.success('Login successful');
        navigate('/');
      } else {
        throw new Error('Invalid response data');
      }
  
    } catch (err) {
      console.error('Login failed:', err);
      toast.error('Login failed: ' + (err.response?.data?.message || 'Unknown error'));
    }
  };
  
  

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>

        {/* 👇 Register Link */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
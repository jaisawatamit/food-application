import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';  // Import dispatch
import { registerUser } from '../redux/authSlice';  // Import the action

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();  // Initialize dispatch function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(import.meta.env.VITE_BASE_URL + '/user/register', {
        name,
        email,
        phoneNumber,
        password
      });

      console.log('Response from server:', response.data); // Log server response

      // Check if the response contains the expected fields
      if (response.data && response.data.token && response.data.email && response.data._id) {
        const { token, email, _id, name, phoneNumber } = response.data;
        const user = { email, _id,  phoneNumber };

        // Store the token and user in Redux
        dispatch(registerUser({ token, user }));

        // Optionally save the token in localStorage
        // localStorage.setItem('token', token);
        // localStorage.setItem('user', JSON.stringify(user));

        toast.success('Registration successful');
        navigate('/login'); // Redirect to home or dashboard
      } else {
        throw new Error('Invalid response data');
      }

    } catch (err) {
      console.error('Register error:', err); // This will help you debug in browser console

      const errorMessage =
        err?.response?.data?.message || // comes from your backend
        err?.message ||                 // comes from axios or JS
        'Something went wrong';         // default fallback

      toast.error('Registration failed: ' + errorMessage);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;

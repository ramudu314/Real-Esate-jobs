import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CompanyLogin = () => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); 

    
    if (!number || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (number.length !== 12) {
      setError('Please enter a valid 12-digit number');
      return;
    }
    if (!/^\d+$/.test(number)) {
      setError('Please enter only numbers');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5002/company-login', {
        number,
        password,
      });
      
      if (response.data.message === 'Login successful') {
        navigate('/company-register'); 
      } else {
        setError(response.data.message); 
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Something went wrong';
      setError(message); 
    }
  };

  const handleNumberChange = (e) => {
    setError('');
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 12) {
      setNumber(value);
    }
  };

  const handlePasswordChange = (e) => {
    setError(''); 
    setPassword(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-600 text-center">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="number">
            12-Digit Number
          </label>
          <input
            className="bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="number"
            type="text"
            maxLength="12"
            value={number}
            onChange={handleNumberChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="flex justify-between items-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            Login
          </button>
          <Link
            to="/company-signup"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            New User? Register Here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CompanyLogin;

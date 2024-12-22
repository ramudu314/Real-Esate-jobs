import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CompanySignup = () => {
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!companyName || !location || !number || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (number.replace(/\s/g, '').length !== 12) {
      setError('Please enter a valid 12-digit number');
      return;
    }
    if (!/^\d+$/.test(number.replace(/\s/g, ''))) {
      setError('Please enter only numbers');
      return;
    }

    submit(e);
  };

  const handleNumberChange = (e) => {
    let value = e.target.value.replace(/\s/g, '');
    if (/^\d*$/.test(value) && value.length <= 12) {
      value = value.replace(/(\d{4})(\d{4})(?=\d)/g, '$1 $2 ').trim();
      setNumber(value);
    }
  };

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5002/company-signup', {
        companyName,
        location,
        number: number.replace(/\s/g, ''),
        password,
      });
      
      if (response.data.message === 'Company already exists') {
        alert('User already exists');
      } else if (response.data.message === 'Company registered successfully') {
        navigate('/company-register');
      }
    } catch (e) {
      alert('Something went wrong');
      console.log(e);
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-600">Register</h2>
      <form action='POST' onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="companyName">
            Company Name
          </label>
          <input
            className="bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="companyName"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            className="bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="number">
            12-Digit Number
          </label>
          <input
            className="bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="number"
            type="text"
            maxLength="17"
            value={number}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
        >
          Register
        </button>
        <Link
          to="/company-login"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Back to Login
        </Link>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default CompanySignup;

import React, { useState } from 'react';
import JobLogo from '../assets/JobLogo.png';
import LoginImage from '../assets/Login.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="flex h-screen bg-gray-100">
        <div><img src={LoginImage} alt="" /></div>
      <div className="hidden md:flex flex-1 items-center justify-center bg-gray-200">
        <img src={LoginImage} alt="Login Illustration" className="w-3/4 h-auto" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <img src={JobLogo} alt="Job Sphere Logo" className="w-40 mb-8" />

        <h2 className="text-2xl font-bold mb-6 text-gray-800">Log in to your account</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>

        <div className="relative my-6 w-full max-w-sm">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-2 text-sm text-gray-500">OR</span>
          </div>
        </div>

        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
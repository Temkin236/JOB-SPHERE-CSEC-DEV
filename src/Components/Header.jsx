import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/JobLogo.svg';

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
           <img src={Logo} alt="JobSphere Logo" className="w-40 h-12 p-1 rounded bg-blue-700" />
          </div>
          <Link to="/post-job" className="mr-4">Post Job</Link>
          <Link to="/posted-jobs">Posted Jobs</Link>
          {/* Navigation Links */}
          <div className="flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-700 hover:underline">
             Job Search
           </Link>
            <Link to="/applications" className="text-gray-700 hover:text-blue-700 hover:underline">
              My Applications
            </Link>
            <Link to="/companies" className="text-gray-700 hover:text-blue-700 hover:underline">
              Companies
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-700 hover:underline">
              Contact Us
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-white text-black border border-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
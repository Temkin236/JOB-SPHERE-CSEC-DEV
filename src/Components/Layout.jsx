import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar'; // Import the NavBar component

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar /> {/* Include the NavBar component */}
      <main className="flex-grow p-4">
        <Outlet /> {/* This will render the matched child route */}
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        © 2025 Job Sphere. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
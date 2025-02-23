import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./Logo";

const NavBar = () => {
  return (
    <section className="w-full h-20 bg-white flex justify-evenly items-center p-4 shadow-md border-b border-blue-600 z-10">
      <Logo />
      <div className="w-1/2 max-w-[625px] text-[#2F2F2F] text-[18px] flex justify-evenly items-center">
        <Link className="text-[#0034D1] underline" to="/">
          Home
        </Link>
        <Link className="text-[#0034D1] underline" to="/job-search">
          Job Search
        </Link>
        <Link to="/my-applications">
          My Applications
        </Link>
        <Link to="/companies">
          Companies
        </Link>
        <Link to="/contact-us">
          Contact Us
        </Link>
      </div>
      <div className="w-1/4 max-w-[340px] flex justify-evenly items-center">
        <Link to="/login">
          <button className="nav-button bg-[#0034D1] text-white">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="nav-button blue_border hover:bg-[#0034D1] hover:text-white">
            Sign up
          </button>
        </Link>
        <Link to="/description">
          <button className="nav-button blue_border hover:bg-[#0034D1] hover:text-white">
            Description
          </button>
        </Link>
      </div>
      <div className="md:hidden">
        <img src="/assets/menu.svg" alt="menu" />
      </div>
    </section>
  );
};

export default NavBar;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Description from '../Components/Description.jsx';
import ApplicationForm from './ApplicationForm.jsx';
import Login from '../Authentication/Login.jsx';
import Signup from '../Authentication/Signup.jsx';
import Home from '../Components/Home.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posting" element={<Posting />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const jobDetails = {
  title: "Software Engineer",
  type: "Full-time",
  salary: 95000,
  description: "Develop and maintain web applications.",
  company: "Google",
  logo: "https://logo.clearbit.com/google.com",
  isBookMarked: true,
  location: "San Francisco, USA",
  experienceLevel: "Mid Level",
  currency: "USD"
};

const Description = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center mb-4">
        <img src={jobDetails.logo} alt={`${jobDetails.company} logo`} className="w-16 h-16 mr-4" />
        <div>
          <h1 className="text-3xl font-bold">{jobDetails.title}</h1>
          <h2 className="text-xl font-semibold">{jobDetails.company}</h2>
          <p className="text-gray-600">{jobDetails.location}</p>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Job Description</h3>
        <p className="text-gray-700">{jobDetails.description}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Job Details</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Type: {jobDetails.type}</li>
          <li>Salary: {jobDetails.currency} {jobDetails.salary}</li>
          <li>Experience Level: {jobDetails.experienceLevel}</li>
        </ul>
      </div>
      <button
        onClick={() => navigate('/apply')}
        className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Apply Now
      </button>
    </div>
  );
};

export default Description;
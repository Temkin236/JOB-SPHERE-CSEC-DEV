import React, { useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';

const Filter = ({ onFilterChange, onResetFilters, jobTypes = [], setJobTypes, setCurrentPage }) => {
  const [minValue, setMinValue] = useState(20);
  const [maxValue, setMaxValue] = useState(2000);
  const [datePosted, setDatePosted] = useState("Last 24 Hours");
  const [location, setLocation] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("Mid Level");
  const [currency, setCurrency] = useState("USD");

  const minLimit = 20;
  const maxLimit = 2000;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
    onFilterChange({ minValue: value, maxValue });
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
    onFilterChange({ minValue, maxValue: value });
  };

  const handleJobTypeChange = (type) => {
    const updatedJobTypes = jobTypes.includes(type)
      ? jobTypes.filter((t) => t !== type)
      : [...jobTypes, type];
    setJobTypes(updatedJobTypes);
    onFilterChange({ jobTypes: updatedJobTypes });
  };

  const handleExperienceChange = (level) => {
    setExperienceLevel(level);
    onFilterChange({ experienceLevel: level });
  };

  const handleCurrencyChange = (currency) => {
    setCurrency(currency);
    onFilterChange({ currency });
  };

  const handleLocationChange = (location) => {
    setLocation(location);
    onFilterChange({ location });
  };

  const handleDatePostedChange = (date) => {
    setDatePosted(date);
    onFilterChange({ datePosted: date });
  };

  const handleResetFilters = () => {
    setJobTypes([]);
    setLocation("");
    setExperienceLevel("Mid Level");
    setCurrency("USD");
    setMinValue(minLimit);
    setMaxValue(maxLimit);
    setDatePosted("Last 24 Hours");
    setCurrentPage(1);
    onResetFilters();
  };

  return (
    <div className="w-[90%] max-w-[300px] rounded-lg bg-white shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Filter</h2>

      {/* Date Posted */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Date Posted</h3>
        <select
          value={datePosted}
          onChange={(e) => handleDatePostedChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option>Last 24 Hours</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>

      {/* Job Type */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Job Type</h3>
        {["Full-time", "Hybrid", "Internship", "Contract", "Volunteer", "Remote"].map((type) => (
          <label key={type} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={jobTypes.includes(type)}
              onChange={() => handleJobTypeChange(type)}
              className="mr-2"
            />
            {type}
          </label>
        ))}
      </div>

      {/* Location */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Location</h3>
        <div className="flex items-center border border-gray-300 rounded-lg p-2">
          <IoLocationOutline className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => handleLocationChange(e.target.value)}
            className="w-full outline-none"
          />
        </div>
      </div>

      {/* Experience Level */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Experience Level</h3>
        <select
          value={experienceLevel}
          onChange={(e) => handleExperienceChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="Entry Level">Entry Level</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior Level">Senior Level</option>
        </select>
      </div>

      {/* Salary Range */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Salary Range</h3>
        <div className="relative w-full">
          <input
            type="range"
            min={minLimit}
            max={maxLimit}
            value={minValue}
            onChange={handleMinChange}
            className="absolute w-full h-4 bg-transparent z-20 appearance-none cursor-pointer"
            style={{ pointerEvents: minValue >= maxValue ? "none" : "auto" }}
          />
          <input
            type="range"
            min={minLimit}
            max={maxLimit}
            value={maxValue}
            onChange={handleMaxChange}
            className="absolute w-full h-4 bg-transparent z-10 appearance-none cursor-pointer"
          />
          <div className="relative w-full h-1 bg-gray-200 rounded-full mt-4">
            <div
              className="absolute h-1 bg-blue-600 rounded-full transition-all duration-100"
              style={{
                left: `${((minValue - minLimit) / (maxLimit - minLimit)) * 100}%`,
                right: `${100 - ((maxValue - minLimit) / (maxLimit - minLimit)) * 100}%`,
              }}
            ></div>
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <span className="px-2 py-1 bg-gray-100 rounded">${minValue}</span>
            <span className="px-2 py-1 bg-gray-100 rounded">${maxValue}</span>
          </div>
        </div>
      </div>

      {/* Currency */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Currency</h3>
        <select
          value={currency}
          onChange={(e) => handleCurrencyChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="USD">USD</option>
          <option value="ETB">ETB</option>
        </select>
      </div>

      {/* Reset Filters Button */}
      <button
        onClick={handleResetFilters}
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Filter;
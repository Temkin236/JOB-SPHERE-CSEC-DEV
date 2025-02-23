import DateFilter from "./components/DateFilter";
import JobTypeFilter from "./components/JobTypeFilter";
import LocationFilter from "./components/LocationFilter";
import ExperienceFilter from "./components/ExperienceFilter";
import SalaryFilter from "./components/SalaryFilter";
import CurrencyFilter from "./components/CurrencyFilter";
import { useState, useEffect, useCallback } from "react";

const Filter = ({ onFilterChange, onResetFilters }) => {
  const [reset, setReset] = useState(false);
  const [filters, setFilters] = useState({
    date: null,
    jobType: null,
    location: null,
    experience: null,
    salary: null,
    currency: null,
  });

  const handleReset = useCallback(() => {
    setReset(true);
    setFilters({
      date: null,
      jobType: null,
      location: null,
      experience: null,
      salary: null,
      currency: null,
    });
    onResetFilters();
  }, [onResetFilters]);

  useEffect(() => {
    if (reset) {
      setReset(false);
    }
  }, [reset]);

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <section className="h-fit flex justify-center items-center p-4">
      <div className="w-90 border-[#87878766] border-[0.5px] p-4 rounded-2xl flex flex-col justify-center items-center gap-2 drop-shadow-lg bg-white">
        <h1 className="text-2xl font-semibold mb-2">Filter</h1>
        <DateFilter Reset={reset} onChange={(value) => handleFilterChange("date", value)} />
        <JobTypeFilter Reset={reset} onChange={(value) => handleFilterChange("jobType", value)} />
        <LocationFilter Reset={reset} onChange={(value) => handleFilterChange("location", value)} />
        <ExperienceFilter Reset={reset} onChange={(value) => handleFilterChange("experience", value)} />
        <SalaryFilter Reset={reset} onChange={(value) => handleFilterChange("salary", value)} />
        <CurrencyFilter Reset={reset} onChange={(value) => handleFilterChange("currency", value)} />
        <button
          onClick={handleReset}
          className="w-[80%] bg-[#0034D1] text-white p-2 rounded-lg mt-4"
        >
          Reset all Filters
        </button>
      </div>
    </section>
  );
};

export default Filter;
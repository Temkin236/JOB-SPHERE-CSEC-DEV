import React, { useContext, useState } from "react";
import Filter from "./Filter";
import Jobs from "./Jobs";
import SavedJob from "./SavedJob";
import SearchBar from "./SearchBar";
import { DataContext } from "./Data";
import Pagination from "./Pagination";
import AD from "./AD";
import useAuthStore from "../store/useAuthStore"; // Import Zustand store

const Home = () => {
  const { jobs, BookMark } = useContext(DataContext);
  const [jobTypes, setJobTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    salary: "",
    experience: "",
    jobType: "",
  });

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated); // Get authentication state from Zustand store

  if (!isAuthenticated) {
    return <p>You are not logged in. Please log in to view this page.</p>;
  }

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to the first page when filters change
  };

  // Handle reset filters
  const handleResetFilters = () => {
    setFilters({
      location: "",
      salary: "",
      experience: "",
      jobType: "",
    });
    setCurrentPage(1); // Reset to the first page
  };

  // Handle search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to the first page when search query changes
  };

  return (
    <section className="flex flex-col">
      <AD />
      <div className="flex justify-evenly items-start gap-4 mt-10 px-24">
        <Filter
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          jobTypes={jobTypes}
          setJobTypes={setJobTypes}
          setCurrentPage={setCurrentPage}
        />
        <section className="max-w-[630px] flex flex-col gap-2 pt-4 relative">
          <SearchBar />
          {jobs.map((job) => (
            <Jobs
              key={job.id}
              id={job.id}
              Logo={job.logo}
              title={job.title}
              company={job.company}
              location={job.location}
              Type={job.type}
              isBookMarked={job.isBookMarked}
              BookMark={BookMark}
              description={job.description}
            />
          ))}
          <Pagination />
        </section>
        <SavedJob />
      </div>
    </section>
  );
};

export default Home;
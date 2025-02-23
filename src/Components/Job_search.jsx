import { useContext, useState } from "react";
import Filter from "./Filter";
import Jobs from "./Jobs";
import SavedJob from "./SavedJob";
import SearchBar from "./SearchBar";
import { DataContext } from "./Data";
import Pagination from "./Pagination";
import AD from "./AD";

const Job_search = () => {
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

  // Filter jobs based on search query and filters
  const filteredJobs = jobs
    .filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilters =
        (filters.location ? job.location === filters.location : true) &&
        (filters.salary ? job.salary === filters.salary : true) &&
        (filters.experience ? job.experience === filters.experience : true) &&
        (filters.jobType ? job.type === filters.jobType : true);
      return matchesSearch && matchesFilters;
    });

  // Pagination logic
  const jobsPerPage = 5;
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  return (
    <section className="flex flex-col">
      <AD />
      <div className="flex justify-evenly items-start gap-4 mt-10 px-24">
        {/* Filter Component */}
        <Filter
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          filters={filters}
          setCurrentPage={setCurrentPage}
        />

        {/* Main Job Listings */}
        <section className="max-w-[630px] flex flex-col gap-2 pt-4 relative">
          <SearchBar onSearch={handleSearch} />
          {paginatedJobs.map((job) => (
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
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </section>

        {/* Saved Jobs Section */}
        <SavedJob />
      </div>
    </section>
  );
};

export default Job_search;
import { useEffect, useState } from "react";

const JobTypeFilter = ({ Reset, onChange }) => {
  const [jobType, setJobType] = useState("");

  useEffect(() => {
    if (Reset) {
      setJobType("");
    }
  }, [Reset]);

  const handleChange = (e) => {
    setJobType(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700">Job Type</label>
      <select
        value={jobType}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="">Select Job Type</option>
        <option value="full-time">Full-time</option>
        <option value="part-time">Part-time</option>
        <option value="contract">Contract</option>
        <option value="internship">Internship</option>
      </select>
    </div>
  );
};

export default JobTypeFilter;
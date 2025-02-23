import { useEffect, useState } from "react";

const SalaryFilter = ({ Reset, onChange }) => {
  const [salary, setSalary] = useState("");

  useEffect(() => {
    if (Reset) {
      setSalary("");
    }
  }, [Reset]);

  const handleChange = (e) => {
    setSalary(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700">Salary</label>
      <input
        type="number"
        value={salary}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter salary"
      />
    </div>
  );
};

export default SalaryFilter;
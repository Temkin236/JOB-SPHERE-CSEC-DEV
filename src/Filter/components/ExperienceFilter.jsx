import { useEffect, useState } from "react";

const ExperienceFilter = ({ Reset, onChange }) => {
  const [experience, setExperience] = useState("");

  useEffect(() => {
    if (Reset) {
      setExperience("");
    }
  }, [Reset]);

  const handleChange = (e) => {
    setExperience(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700">Experience Level</label>
      <select
        value={experience}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="">Select Experience Level</option>
        <option value="entry">Entry Level</option>
        <option value="mid">Mid Level</option>
        <option value="senior">Senior Level</option>
      </select>
    </div>
  );
};

export default ExperienceFilter;
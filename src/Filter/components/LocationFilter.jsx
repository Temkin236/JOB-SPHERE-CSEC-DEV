import { useEffect, useState } from "react";

const LocationFilter = ({ Reset, onChange }) => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (Reset) {
      setLocation("");
    }
  }, [Reset]);

  const handleChange = (e) => {
    setLocation(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700">Location</label>
      <input
        type="text"
        value={location}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        placeholder="Enter location"
      />
    </div>
  );
};

export default LocationFilter;
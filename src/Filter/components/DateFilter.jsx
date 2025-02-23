import { useEffect, useState } from "react";

const DateFilter = ({ Reset, onChange }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    if (Reset) {
      setDate("");
    }
  }, [Reset]);

  const handleChange = (e) => {
    setDate(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700">Date</label>
      <input
        type="date"
        value={date}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default DateFilter;
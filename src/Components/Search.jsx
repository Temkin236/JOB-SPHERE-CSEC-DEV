import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";
import Line from "../assets/Line.svg"

const Search = ({ query, setQuery, deferredQuery, filteredQuery }) => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query, "in location:", location);
  };

  return (
    <div className="ml-[370px] flex rounded-[12px] w-[560px] h-[7px] p-6 shadow-md items-center">
      <div className="w-[350px] h-[10px] flex items-center ">
        <CiSearch className="w-[29px] h-[15px] text-[#000000] -ml-5" />
        <input
          type="text"
          placeholder="Job title, Keywords, or Company name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-[270px] h-[19px] font-[200] text-[16px] leading-[19.36px] text-[#000000] outline-none"
          aria-label="Search for job title, keywords, or company name"
        />
        <img src={Line} alt="line" className=" h-[35px] mr-2 text-[#C1C1C1]" />
      </div>

      {query && (
        <div className="absolute top-[38px] left-0 w-full bg-white rounded-[20px] border-[1px] mt-2 z-10">
          {deferredQuery !== query ? (
            <p className="p-2 text-gray-500">Loading...</p>
          ) : filteredQuery.length > 0 ? (
            <ul>
              {filteredQuery.map((job) => (
                <li
                  key={job.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {job.title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-2 text-gray-500">No results found.</p>
          )}
        </div>
      )}

      <div className="w-[150px] h-[24px] flex items-center ml-0">
        <IoLocationOutline className="w-[12px] h-[23px] mr-1 text-[#000000] " />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-[100px] h-[19px] font-[200] text-[16px] leading-[19.36px] text-[#000000] outline-none"
          aria-label="Enter location"
        />
      </div>

      {/* Search Button */}
      <div className="w-[170px] h-[38px] rounded-[8px] pt-[5px] pr-[20px] pb-[10px] pl-[28px] gap-[1px] bg-[#0034D1] ml-8 items-center">
        <button
          className="font-[600] text-[17px] leading-[14px] text-[#FFFFFF]"
          aria-label="Search"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
import React, { useState } from "react";
import { ChevronDown, PersonCircle, SearchOutline } from "react-ionicons";
import db from "../../db.json"; // Assuming db.json is in the same directory or reachable
import { TaskT } from "../../types";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<TaskT[]>([]);

  const handleSearch = (event: any) => {
    const term = event.target.value;
    setSearchTerm(term);

    // If search term is empty, show all tasks
    if (!term.trim()) {
      setSearchResults([]);
    } else {
      // Filter items from db.json based on the title in the "backlog" section
      const results = db.backlog
        .filter((task) => task.title.toLowerCase().includes(term.toLowerCase()))
        .map((task) => ({
          ...task,
          tags: task.tags.map((tag) => ({
            title: tag.title,
            bg: tag.color,
            text: tag.color === "white" ? "black" : "white",
          })),
        }));
      setSearchResults(results);
    }
  };

  return (
    <div className="md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-[#fff]">
      <div className="flex items-center gap-3 cursor-pointer">
        <PersonCircle color="#fb923c" width={"28px"} height={"28px"} />
        <span className="text-blue-400 font-semibold md:text-lg text-sm whitespace-nowrap">
          Board Name
        </span>
        <ChevronDown color="#fb923c" width={"16px"} height={"16px"} />
      </div>
      <div className="md:w-[800px] w-[130px] bg-gray-100 rounded-lg px-3 py-[10px] flex items-center gap-2 relative">
        <SearchOutline color={"#999"} />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-100 outline-none text-[15px]"
          value={searchTerm}
          onChange={handleSearch}
        />
        {/* Suggestions based on searchResults */}
        {searchTerm && searchResults.length > 0 && (
          <ul className="absolute bg-white border border-gray-200 mt-1 w-full rounded-lg">
            {searchResults.map((result) => (
              <li key={result.id} className="py-1 px-3 cursor-pointer">
                {result.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;

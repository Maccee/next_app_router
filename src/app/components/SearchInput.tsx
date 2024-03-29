import { useState } from "react";

import { MagnifyingGlassIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import { StarIcon, MapIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const SearchInput = () => {
    const [inputValue, setInputValue] = useState("");

    const handleSearch = () => {
      setKeyword(inputValue);
    };
  
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };
    return (
        <div className="max-w-3xl flex flex-grow items-center border-2 p-2 rounded-full min-w-0 bg-white m-2">
        <input
          className="flex-grow bg-transparent outline-none min-w-0"
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <MagnifyingGlassIcon
          className="inline-flex h-10 w-10 bg-logoBlue text-white rounded-full p-2 cursor-pointer"
          onClick={handleSearch}
        />
      </div>
    );
}

export default SearchInput;
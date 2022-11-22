import { useState } from "react";
import { useSearchBox, UseSearchBoxProps } from "react-instantsearch-hooks-web";
import { FiSearch } from "react-icons/fi";

const Search = (props: UseSearchBoxProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { refine } = useSearchBox(props);

  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
    refine(e.target.value);
  };

  return (
    <>
      <div className="search_container ">
        <FiSearch />
        <input
          type="text"
          placeholder="Search for event..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
    </>
  );
};

export default Search;

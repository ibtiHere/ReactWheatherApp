import React from "react";
const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search-engine">
      <input
        type="text"
        className="city-search"
        placeholder="ENTER CITY NAME"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button className="search-btn" onClick={handleSearch}>
        ENTER
      </button>
    </div>
  );
};

export default Search;

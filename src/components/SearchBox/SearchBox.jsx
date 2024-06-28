import { useState } from "react";
import searchInfo from "./SearchBox.module.css";
const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className={searchInfo.containerSearch}>
      <label>Find Contacts by name</label>
      <input
        className={searchInfo.search}
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;

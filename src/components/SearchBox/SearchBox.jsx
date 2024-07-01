import searchInfo from "./SearchBox.module.css";

const SearchBox = ({ searchTerm, onSearch }) => {
  const handleChange = (event) => {
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

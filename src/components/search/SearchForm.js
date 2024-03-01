function SearchForm({ setShowSearchBox }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setShowSearchBox(false);
    }
  };

  return (
    <form id="searchForm" role="search">
      <input
        type="search"
        placeholder="Search your poison..."
        className="form-control"
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </form>
  );
}

export default SearchForm;

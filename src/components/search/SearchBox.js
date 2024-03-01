import SearchForm from "./SearchForm";

function SearchBox({ setShowSearchBox }) {
  return (
    <div className="search-box">
      <button className="dismiss">
        <i className="icon-close" onClick={() => setShowSearchBox(false)}></i>
      </button>
      <SearchForm setShowSearchBox={setShowSearchBox} />
    </div>
  );
}

export default SearchBox;

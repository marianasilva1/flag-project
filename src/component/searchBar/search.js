import { useContext, useEffect } from "react";
import { SearchBarContext } from "../../App";
import "./search.scss";

function SearchBar() {
  const { setSearchTerm } = useContext(SearchBarContext);
  useEffect(() => {
    setSearchTerm("");
  }, [setSearchTerm]);
  return (
    <div className="search">
      <div className="search__modal">
        <input
          type="text"
          className="search__input"
          onChange={(e) => {
            e.preventDefault();
            setSearchTerm(e.target.value);
          }}
        ></input>
        <span className="search__icon material-icons-outlined">search</span>
      </div>
    </div>
  );
}

export default SearchBar;

import React, { useState } from "react";
import { GenButton } from "./GenButton";

function Search({ films, setFilterFilms }) {
  const [userSearchInput, setUserSearchInput] = useState("");

  function handleChange(e) {
    setUserSearchInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const filterFilmsByTitle = films.filter((film) => {
      const titleWords = film.Title.toLowerCase().split(" ");
      const caseSearchedTerm = userSearchInput.toLowerCase();

      return titleWords.includes(caseSearchedTerm);
    });

    setFilterFilms(filterFilmsByTitle);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="searchtitles"
            value={userSearchInput.searchtitles}
            placeholder="Search for film by title"
            className="search-input"
            onChange={handleChange}
          />
        </div>
        <GenButton type="submit" text="Submit" className=" btn submit-search" />
      </form>
    </>
  );
}

export default Search;

import React, { useState } from "react";
import { GenButton } from "./GenButton";
import "./FilmPage.css";

function Search({ films, setFilterFilms }) {
  const [userSearchInput, setUserSearchInput] = useState("");

  function handleChange(e) {
    setUserSearchInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const filterFilmsByTitle = films.filter((film) => {
      const titleWords = film.Title.toLowerCase();

      const caseSearchedTerm = userSearchInput.toLowerCase();

      return titleWords.includes(caseSearchedTerm);
    });

    setFilterFilms(filterFilmsByTitle);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <div>
          <input
            type="text"
            name="searchtitles"
            value={userSearchInput}
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

import React, { useState } from "react";
import { GenButton } from "./GenButton";

function Search({ films, setFilms, filterFilms, setFilterFilms }) {
  const [userSearchInput, setUserSearchInput] = useState("");

  const filterFilmsByTitle = films.filter((film) => {
    return film.Title.toLowerCase().includes(userSearchInput);
  });

  function handleChange(e) {
    setUserSearchInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFilms(filterFilmsByTitle);
  }

  function handleReset() {
    setFilms(films);
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
            onChange={handleChange}
          />
        </div>
        <GenButton type="submit" text="Submit" className=" btn submit-search" />
        <GenButton
          text="Reset"
          className="btn reset-list"
          handleClick={handleReset}
        />
      </form>
    </>
  );
}

export default Search;

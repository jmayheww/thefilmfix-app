import React, { useState } from "react";

function Search(films, setFilms) {
  const [userSearchInput, setUserSearchInput] = useState("");

  function handleChange(e) {
    setUserSearchInput(e.target.value);
  }

  console.log(userSearchInput);

  function handleSubmit(e) {
    e.preventDefault();

    const filterFilmsByTitle = films.films.filter((film) => {
      return film.Title === userSearchInput;
    });
  }

  return (
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
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;

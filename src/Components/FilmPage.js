import React, { useState } from "react";
import NewFilmForm from "./NewFilmForm";
import Search from "./Search";
import FilmList from "./FilmList";

function FilmPage({ films }) {
  const [position, setPosition] = useState(0);
  const DISPLAY_COUNT = 8;

  function showMoreFilms() {
    setPosition((position + DISPLAY_COUNT) % films.length);
  }
  return (
    <main>
      <NewFilmForm />
      <Search />
      <FilmList
        films={films.slice(position, position + DISPLAY_COUNT)}
        handleMoreClick={showMoreFilms}
      />
    </main>
  );
}

export default FilmPage;

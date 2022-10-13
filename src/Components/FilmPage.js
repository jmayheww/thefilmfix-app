import React from "react";
import NewFilmForm from "./NewFilmForm";
import Search from "./Search";
import FilmList from "./FilmList";

function FilmPage({ films }) {
  return (
    <main>
      <NewFilmForm />
      <Search />
      <FilmList films={films} />
    </main>
  );
}

export default FilmPage;

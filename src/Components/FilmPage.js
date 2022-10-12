import React from "react";
import NewFilmForm from "./NewFilmForm";
import Search from "./Search";
import FilmList from "./FilmList";

function FilmPage() {
  return (
    <main>
      <NewFilmForm />
      <Search />
      <FilmList />
    </main>
  );
}

export default FilmPage;

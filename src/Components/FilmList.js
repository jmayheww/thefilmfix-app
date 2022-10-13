import React from "react";
import FilmCard from "./FilmCard";

function FilmList({ films }) {
  const renderFilms = films.map((film) => {
    const { Title, Language } = film;
    const key = film.FIELD1;
    console.log(film);
    return <FilmCard key={key} />;
  });

  return <div>{renderFilms}</div>;
}
export default FilmList;

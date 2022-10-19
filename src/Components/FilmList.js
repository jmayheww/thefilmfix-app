import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GenButton } from "./GenButton";

function FilmList({
  films,
  position,
  numFilms,
  handlePreviousClick,
  handleNextClick,
  handleReset,
}) {
  const { pathname } = useLocation();
  const curFilm = Number(pathname.replace("/films/", ""));

  const renderFilms = films.map((film, idx) => {
    const { Title, Language, Description, Director, Country, Year, Image } =
      film;

    const id = film.FIELD1;
    const selected = id === curFilm;
    console.log("selected: ", selected);

    return (
      <div key={id} className={`film-card ${selected ? "selected" : ""}`}>
        <Link to={`/films/${id}`}>
          {<img src={Image} height="300" width="300" />}
        </Link>
      </div>
    );
  });

  return (
    <div className="card-container">
      <h1>Criterion Collection Films</h1>
      <br />
      {renderFilms}
      <div className="film-nav-buttons">
        <GenButton
          handleClick={handlePreviousClick}
          className="btn prev"
          disabled={position === 0}
          text="Previous Eight Films"
        />
        <GenButton
          handleClick={handleReset}
          className="btn reset"
          text="Reset"
        />
        <GenButton
          handleClick={handleNextClick}
          disabled={position === numFilms - 8}
          className="btn next"
          text="Next Eight Films"
        />
      </div>
    </div>
  );
}
export default FilmList;

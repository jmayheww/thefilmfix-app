import React from "react";
import { Link } from "react-router-dom";
import { GenButton } from "./GenButton";

function FilmList({
  films,
  position,
  numFilms,
  handlePreviousClick,
  handleNextClick,
  handleReset,
}) {
  const renderFilms = films.map((film) => {
    const { Title, Language, Description, Director, Country, Year, Image } =
      film;

    const id = film.FIELD1;

    return (
      <div key={id}>
        <Link to={`/films/${id}`}>
          {<img src={Image} height="300" width="300" />}
        </Link>
      </div>
    );
  });

  return (
    <div className="card-container">
      <h2>Criterion Collection Films</h2>
      <br />
      {renderFilms}
      <GenButton
        handleClick={handlePreviousClick}
        className="btn prev"
        disabled={position === 0}
        text="Previous Eight Films"
      />
      <GenButton handleClick={handleReset} className="btn reset" text="Reset" />
      <GenButton
        handleClick={handleNextClick}
        disabled={position === numFilms - 8}
        className="btn next"
        text="Next Eight Films"
      />
    </div>
  );
}
export default FilmList;

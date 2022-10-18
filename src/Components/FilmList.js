import React from "react";
import { Link } from "react-router-dom";
import FilmCard from "./FilmCard";
import MoreButton from "./MoreButton";
import ResetButton from "./ResetButton";
import PreviousButton from "./PreviousButton";

function FilmList({
  films,
  handlePreviousClick,
  handleMoreClick,
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
      <PreviousButton handlePreviousClick={handlePreviousClick} />
      <ResetButton handleReset={handleReset} />
      <MoreButton handleMoreClick={handleMoreClick} />
    </div>
  );
}
export default FilmList;

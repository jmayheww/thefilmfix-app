import React from "react";
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
    const {
      Title,
      Language,
      Description,
      Director,
      Country,
      Year,
      Image,
      FIELD1,
    } = film;

    return (
      <div className="film-list">
        <FilmCard
          key={FIELD1}
          title={Title}
          description={Description}
          director={Director}
          country={Country}
          year={Year}
          language={Language}
          image={Image}
        />
      </div>
    );
  });

  return (
    <div className="card-container">
      {renderFilms}
      <PreviousButton handlePreviousClick={handlePreviousClick} />
      <ResetButton handleReset={handleReset} />
      <MoreButton handleMoreClick={handleMoreClick} />
    </div>
  );
}
export default FilmList;

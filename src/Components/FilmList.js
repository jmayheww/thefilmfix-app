import React from "react";
import FilmCard from "./FilmCard";
import MoreButton from "./MoreButton";

function FilmList({ films, handleMoreClick }) {
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
      <MoreButton handleMoreClick={handleMoreClick} />
    </div>
  );
}
export default FilmList;

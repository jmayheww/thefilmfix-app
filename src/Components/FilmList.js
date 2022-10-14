import React from "react";
import FilmCard from "./FilmCard";

function FilmList({ films }) {
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
    );
  });

  return <div>{renderFilms}</div>;
}
export default FilmList;

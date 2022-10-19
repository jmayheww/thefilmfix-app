import React from "react";
import { useParams } from "react-router-dom";

function FilmShow({ films }) {
  const params = useParams();

  if (films[params.filmId])
    return (
      <div className="film-details">
        <h2>{films[params.filmId].Title}</h2>
        <p className="film-desc">{films[params.filmId].Description}</p>
      </div>
    );
}

export default FilmShow;

import React from "react";
import { useParams } from "react-router-dom";

function FilmShow({ films }) {
  const params = useParams();
  console.log("params: ", params);
  console.log(films[params.filmId]);

  if (films[params.filmId])
    return (
      <div className="film-details">
        <h4>{films[params.filmId].Description}</h4>
      </div>
    );
}

export default FilmShow;

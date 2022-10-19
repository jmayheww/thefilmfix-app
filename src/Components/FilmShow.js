import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GenButton } from "./GenButton";

function FilmShow({ films }) {
  const params = useParams();
  const [curFilm, setCurFilm] = useState(0);
  const [userCollection, setUserCollection] = useState([]);
  const [alreadyInCOllection, setAlreadyInCollection] = useState(false);

  useEffect(() => {});

  if (films[params.filmId])
    return (
      <div className="film-details">
        <h2>{films[params.filmId].Title}</h2>
        <p className="film-desc">{films[params.filmId].Description}</p>
        <GenButton />
      </div>
    );
}

export default FilmShow;

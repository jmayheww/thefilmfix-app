import React from "react";
import { Link } from "react-router-dom";

function FilmCard({
  title,
  description,
  director,
  country,
  year,
  language,
  image,
  id,
}) {
  console.log(id);
  return (
    <div className="film-card">
      <h4>{title}</h4>
      <img src={image} alt={"film image"} width="300" height="300" />
    </div>
  );
}

export default FilmCard;

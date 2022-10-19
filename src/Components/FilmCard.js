import React from "react";
import { Link } from "react-router-dom";
import { GenButton } from "./GenButton";

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
  return (
    <div className="film-card">
      <h4>{title}</h4>
      <img src={image} alt={"film image"} width="300" height="300" />
      <GenButton />
    </div>
  );
}

export default FilmCard;

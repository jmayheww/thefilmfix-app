import React from "react";

function FilmCard({
  title,
  description,
  director,
  country,
  year,
  language,
  image,
}) {
  console.log(title);
  return (
    <div className="film-card">
      <h4>{title}</h4>
      <img src={image} alt={"film image"} width="300" height="300" />
    </div>
  );
}

export default FilmCard;

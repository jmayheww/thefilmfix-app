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
    </div>
  );
}

export default FilmCard;

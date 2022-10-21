import React, { useEffect } from "react";
import { collectionUrl } from "../Utilities/api-helpers";

function MyFilmsList({ displayCollection, setDisplayCollection }) {
  useEffect(() => {
    fetch(collectionUrl)
      .then((resp) => resp.json())
      .then((data) => setDisplayCollection(data[0].collection));
  });

  const renderCollection = displayCollection.map((film) => {
    const { Title, Image } = film;

    return (
      <div className="collection-card" key={film.FIELD1}>
        <h4>{Title}</h4>
        <img src={Image} alt="user added film image" height="300" width="300" />
      </div>
    );
  });

  return <div className="collection-container">{renderCollection}</div>;
}

export default MyFilmsList;

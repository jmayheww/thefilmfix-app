import React, { useEffect } from "react";
import { collectionUrl } from "../Utilities/api-helpers";
import "./MyAccount.css";

function MyFilmsList({ userCollection, setUserCollection }) {
  useEffect(() => {
    fetch(collectionUrl)
      .then((resp) => resp.json())
      .then((data) => setUserCollection(data[0].collection));
  });

  const renderCollection = userCollection.map((film) => {
    const { Title, Image } = film;

    function handleRemoveFromCollection() {
      console.log("test");
    }

    return (
      <li className="collection-item" key={film.FIELD1}>
        <div
          className="remove"
          onClick={() => handleRemoveFromCollection(film.Title)}
        >
          <span>remove</span>
          <span>&times</span>
        </div>
        <div className="img-wrap">
          <img src={Image} alt={Title} />
        </div>
        <p>{Title}</p>
      </li>
    );
  });

  return <>{renderCollection}</>;
}

export default MyFilmsList;

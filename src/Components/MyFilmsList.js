import React from "react";
import "./MyAccount.css";

function MyFilmsList({ userCollection, handleRemoveFromCollection }) {
  const renderCollection = userCollection.map((film) => {
    const { Title, Image } = film;

    return (
      <li className="collection-item" key={film.FIELD1}>
        <div
          className="remove"
          onClick={() => handleRemoveFromCollection(Title)}
        >
          <span>remove</span>
          <span>&times;</span>
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

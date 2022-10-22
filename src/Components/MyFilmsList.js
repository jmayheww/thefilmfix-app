import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { collectionUrl } from "../Utilities/api-helpers";
import "./MyAccount.css";

function MyFilmsList({
  userCollection,
  setUserCollection,
  setCurFilm,
  handleRemoveFromCollection,
}) {
  const params = useParams();

  // useEffect(() => {
  //   fetch(collectionUrl)
  //     .then((resp) => resp.json())
  //     .then((data) => setUserCollection(data[0].collection));
  // }, []);

  useEffect(() => {
    if (params.filmId) {
      setCurFilm(params.filmId);
    }
  }, [params]);

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

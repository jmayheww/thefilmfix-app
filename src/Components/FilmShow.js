import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GenButton } from "./GenButton";
import { collectionUrl } from "../Utilities/api-helpers";

const initialCollection = {
  collection: [],
};

function FilmShow({ films }) {
  const params = useParams();
  const [curFilm, setCurFilm] = useState(0);
  const [userCollection, setUserCollection] = useState([]);
  const [alreadyInCollection, setAlreadyInCollection] = useState(false);

  useEffect(() => {
    fetch(collectionUrl)
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data: ", data);
        const collection = data[0].collection;
        setUserCollection(collection);
      });
  }, []);

  useEffect(() => {
    if (params.filmId) {
      setCurFilm(params.filmId);
    }
  }, [params]);

  useEffect(() => {
    const filmFound = userCollection.some(({ Title }) => {
      return Title === films[curFilm].Title;
    });

    setAlreadyInCollection(filmFound);
  }, [userCollection, curFilm, films]);

  function handleRemoveFromCollection() {}

  function handleAddToCollection() {}

  if (films[params.filmId])
    return (
      <div className="film-details">
        <h2>{films[params.filmId].Title}</h2>
        <p className="film-desc">{films[params.filmId].Description}</p>
        <GenButton
          className={`collection-btn ${alreadyInCollection ? "remove" : "add"}`}
          onClick={
            alreadyInCollection
              ? handleRemoveFromCollection
              : handleAddToCollection
          }
          text={
            alreadyInCollection ? "Remove from collection" : "Add to collection"
          }
        />
      </div>
    );
}

export default FilmShow;

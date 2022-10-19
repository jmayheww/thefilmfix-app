import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GenButton } from "./GenButton";
import { loginUrl, collectionUrl } from "../Utilities/api-helpers";

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
        const collection = data[0].collection;

        setUserCollection(collection);
      });
  }, []);

  useEffect(() => {
    console.log("userCollection CHANGED!: ", userCollection);
  }, [userCollection]);

  useEffect(() => {
    if (params.filmId) {
      setCurFilm(params.filmId);
    }
  }, [params]);

  useEffect(() => {
    const filmFound = userCollection.some(({ Title }) => {
      return Title === films[curFilm]?.Title;
    });

    setAlreadyInCollection(filmFound);
  }, [userCollection, curFilm, films]);

  function updateCollection(updated) {
    fetch(loginUrl)
      .then((resp) => resp.json())
      .then((data) => {
        const userId = data[0].id;
        fetch(`${collectionUrl}/${userId}`, {
          method: "PATCH",
          headers: {
            "COntent-Type": "application/json",
          },
          body: JSON.stringify({
            collection: updated,
          }),
        })
          .then((resp) => resp.json())
          .then((data) => {
            setUserCollection(data.collection);
          });
      });
  }

  function handleAddToCollection() {
    const newCollection = [...userCollection, films[curFilm]];
    updateCollection(newCollection);
  }

  function handleRemoveFromCollection() {
    const newCollection = userCollection.filter(({ Title }) => {
      return Title !== films[curFilm].Title;
    });
    updateCollection(newCollection);
  }

  return (
    <div className="film-details">
      {films[curFilm] && (
        <>
          <h2>{films[params.filmId].Title}</h2>
          <p className="film-desc">{films[params.filmId].Description}</p>
          <GenButton
            className={`collection-btn ${
              alreadyInCollection ? "remove" : "add"
            }`}
            handleClick={
              alreadyInCollection
                ? handleRemoveFromCollection
                : handleAddToCollection
            }
            text={
              alreadyInCollection
                ? "Remove from collection"
                : "Add to collection"
            }
          />
        </>
      )}
    </div>
  );
}

export default FilmShow;

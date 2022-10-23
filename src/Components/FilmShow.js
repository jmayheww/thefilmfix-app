import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GenButton } from "./GenButton";
import { getCollectionData } from "../Utilities/api-helpers";

function FilmShow({
  films,
  userCollection,
  setUserCollection,
  user,
  loggedUser,
  curFilm,
  setCurFilm,
  handleAddToCollection,
  handleRemoveFromCollection,
}) {
  const params = useParams();
  const [alreadyInCollection, setAlreadyInCollection] = useState(false);

  useEffect(() => {
    if (user) {
      getCollectionData(user.id).then((data) => {
        const collection = data.collection;

        setUserCollection(collection);
      });
    }
  }, [user]);

  useEffect(() => {}, [userCollection]);

  useEffect(() => {
    if (params.filmId) {
      setCurFilm(params.filmId);
    }
  }, [params]);

  useEffect(() => {
    if (userCollection) {
      const filmFound = userCollection.some(({ Title }) => {
        return Title === films[curFilm]?.Title;
      });

      setAlreadyInCollection(filmFound);
    }
  }, [userCollection, curFilm, films]);

  return (
    <div className="film-details">
      {films[curFilm] && (
        <>
          <h2>{films[params.filmId].Title}</h2>
          <p className="film-desc">{films[params.filmId].Description}</p>
          {loggedUser ? (
            <GenButton
              className={`collection-btn ${
                alreadyInCollection ? "remove" : "add"
              }`}
              handleClick={
                alreadyInCollection
                  ? () => handleRemoveFromCollection()
                  : () => handleAddToCollection()
              }
              text={
                alreadyInCollection
                  ? "Remove from collection"
                  : "Add to collection"
              }
            />
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}

export default FilmShow;

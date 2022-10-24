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
          <div className="details-a">
            <h2>{films[curFilm].Title}</h2>
          </div>
          <div className="details-b">
            <p className="director">{films[curFilm].Director}</p>
            <p className="country">{films[curFilm].Country}</p>
            <p className="year">{films[curFilm].Year}</p>
          </div>
          <div className="details-c">
            <p className="film-desc">{films[curFilm].Description}</p>
          </div>
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

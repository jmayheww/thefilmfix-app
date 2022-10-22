import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./LogIn";
import MyFilmsList from "./MyFilmsList";
import "./MyAccount.css";

function MyAccount({
  loggedUser,
  setLoggedUser,
  userCollection,
  setUserCollection,
  setCurFilm,
  handleRemoveFromCollection,
}) {
  return (
    <div className="user-page">
      {!loggedUser ? (
        <Login setLoggedUser={setLoggedUser} />
      ) : (
        <div className="user-content">
          <h3 className="user-greeting">
            Welcome back to The Film Fix App
            <span>{loggedUser?.username ?? ""}</span>
          </h3>

          <div className="collection-container">
            <h5 className="collection-title">My Film Collection</h5>
            <ul className="user-collection">
              <MyFilmsList
                userCollection={userCollection}
                setUserCollection={setUserCollection}
                handleRemoveFromCollection={handleRemoveFromCollection}
                setCurFilm={setCurFilm}
              />
            </ul>
          </div>
          <div className="explore-more">
            <h6>
              Add to your collection by exploring our extensive collection of
              Criterion Films.
            </h6>
            <Link to="/films">Visit Criterion Collection</Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default MyAccount;

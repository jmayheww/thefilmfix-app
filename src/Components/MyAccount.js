import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Login from "./LogIn";
import MyFilmsList from "./MyFilmsList";
import "./MyAccount.css";

function MyAccount({
  loggedUser,
  setLoggedUser,
  userCollection,
  setUserCollection,
}) {
  return (
    <div>
      {!loggedUser ? (
        <Login setLoggedUser={setLoggedUser} />
      ) : (
        <div className="myaccount">
          <div className="logged-message">
            <h3>{`Welcome back to The Film Fix App, ${loggedUser.username}.`}</h3>
            <h5>Explore our extensive collection of Criterion Films.</h5>
          </div>
          <div className="user-films-list">
            <MyFilmsList
              userCollection={userCollection}
              setUserCollection={setUserCollection}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default MyAccount;

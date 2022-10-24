import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginUrl, collectionUrl } from "../Utilities/api-helpers";
import "./Log.css";

function Logout({ setLoggedUser, loggedUser }) {
  const [updateLogin, setUpdateLogin] = useState(null);

  function handleLogout() {
    fetch(`${loginUrl}/${loggedUser.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUpdateLogin(data);
      });

    setLoggedUser(updateLogin);
  }

  function handleUserCollection() {
    fetch(`${collectionUrl}/${loggedUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: [],
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data: ", data);
      });
  }

  return (
    <div className="logout">
      {!loggedUser ? (
        <div className="logout-1">
          <h3>You are not currently signed in.</h3>
          <Link to="/">
            <button type="button" className="logout-return-button">
              Return to Home Page
            </button>
          </Link>
        </div>
      ) : (
        <div className="logout-2">
          <h1>{`Thanks ${loggedUser.username} for coming to The Film Fix`}</h1>
          <button
            className="logout-farewell-button"
            onClick={() => {
              handleLogout();
              handleUserCollection();
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Logout;

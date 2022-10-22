import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginUrl, collectionUrl } from "../Utilities/api-helpers";

function Logout({ setLoggedUser, loggedUser, setUserCollection }) {
  const [updateLogin, setUpdateLogin] = useState(null);
  const [removeCollection, setRemoveCollection] = useState({});

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
    const updatedCollection = [
      {
        id: 1,
        collection: [],
      },
    ];
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
        <div>
          <h3>You are not currently signed in.</h3>
          <Link to="/">
            <button type="button">Return to Home Page</button>
          </Link>
        </div>
      ) : (
        <div>
          <h1>{`Thanks ${loggedUser.username} for coming to The Film Fix`}</h1>
          <button
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

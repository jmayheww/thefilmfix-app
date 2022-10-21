import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginUrl } from "../Utilities/api-helpers";

function Logout({ setLoggedUser, loggedUser }) {
  const [updateLogin, setUpdateLogin] = useState(null);

  useEffect(() => {
    console.log("loggedUser: ", loggedUser);
  }, [loggedUser]);

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
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Logout;

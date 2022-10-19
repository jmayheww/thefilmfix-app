import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUrl } from "../Utilities/api-helpers";

function Logout({ setLoggedUser, loggedUser }) {
  const [updateLogin, setUpdateLogin] = useState([]);

  const loggedUserName = loggedUser.map((user) => user.username);
  const loggedId = loggedUser.map((user) => user.id);

  console.log(loggedUser);

  function handleLogout() {
    fetch(`${loginUrl}/${loggedId}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) =>
        setUpdateLogin((currentUserLoginState) => [currentUserLoginState, data])
      );

    setLoggedUser(updateLogin);
  }

  return (
    <div className="logout">
      {loggedUser.length <= 0 ? (
        <div>
          <h3>You are not currently signed in.</h3>
          <Link to="/">
            <button type="button">Return to Home Page</button>
          </Link>
        </div>
      ) : (
        <div>
          <h1>{`Thanks ${loggedUserName} for coming to The Film Fix`}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Logout;

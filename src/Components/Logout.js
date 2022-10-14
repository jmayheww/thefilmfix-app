import React, { useState } from "react";
import { Link } from "react-router-dom";

function Logout({ setLoggedUser, setIsLoggedIn, loggedUser, userData }) {
  const [updateLogin, setUpdateLogin] = useState([]);

  const loggedUserName = loggedUser.slice(0, 1).map((user) => user.username);
  const loggedId = loggedUser.slice(0, 1).map((user) => user.id);

  console.log(loggedUser);

  function handleLogout() {
    setIsLoggedIn(false);

    fetch(`${userData}/${loggedId}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) =>
        setUpdateLogin((currentUserLoginState) => [currentUserLoginState, data])
      );
    console.log("update login:", updateLogin);
    setLoggedUser(updateLogin);
  }

  return (
    <div className="logout">
      {loggedUser.length <= 0 ? (
        <div>
          <h3>You are not currently signed in.</h3>
          <Link to="/home">
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

import React from "react";
import { Link } from "react-router-dom";

function Logout({ isLoggedIn, setIsLoggedIn, loggedUser, userData }) {
  const loggedUserName = loggedUser.map((user) => user.username);

  function handleLogout() {
    setIsLoggedIn(false);

    fetch(userData, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="logout">
      {!isLoggedIn ? (
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

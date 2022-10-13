import React from "react";
import { Redirect } from "react-router-dom";

function Logout({ isLoggedIn, setIsLoggedIn }) {
  function handleLogout() {
    setIsLoggedIn(false);
    console.log(isLoggedIn);
  }
  return (
    <div className="logout">
      {!isLoggedIn ? (
        <p>You are not currently logged in.</p>
      ) : (
        <div>
          <h1>Please confirm that you wish to log out of your account</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Logout;

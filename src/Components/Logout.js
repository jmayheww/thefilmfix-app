import React from "react";
import { Redirect } from "react-router-dom";

function Logout({ isLoggedIn, setIsLoggedIn }) {
  if (!isLoggedIn) return <p>You are not currently logged in.</p>;

  function handleLogout() {
    setIsLoggedIn(false);
    console.log(isLoggedIn);
  }
  return (
    <div className="logout">
      <h1>Please confirm you wish to log out of your account</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;

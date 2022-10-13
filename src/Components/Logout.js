import React from "react";

function Logout({ isLoggedIn, setIsLoggedIn }) {
  function handleLogout() {
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

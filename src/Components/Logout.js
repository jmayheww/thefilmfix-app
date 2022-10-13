import React from "react";

function Logout({ setIsLoggedIn }) {
  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="logout">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;

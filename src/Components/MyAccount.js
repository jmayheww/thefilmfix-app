import React from "react";
import { Redirect } from "react-router-dom";
import Login from "./LogIn";

function MyAccount({ isLoggedIn, setIsLoggedIn }) {
  console.log(isLoggedIn);

  return (
    <div>
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Redirect to="/home" />
      )}
    </div>
  );
}
export default MyAccount;

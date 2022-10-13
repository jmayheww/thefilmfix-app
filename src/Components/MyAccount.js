import React from "react";
import { Redirect } from "react-router-dom";
import Login from "./LogIn";

function MyAccount({ isLoggedIn, setIsLoggedIn, setLoggedUser }) {
  console.log(isLoggedIn);

  return (
    <div>
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} setLoggedUser={setLoggedUser} />
      ) : (
        <Redirect to="/home" />
      )}
    </div>
  );
}
export default MyAccount;

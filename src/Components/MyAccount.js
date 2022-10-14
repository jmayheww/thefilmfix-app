import React from "react";
import { Redirect } from "react-router-dom";
import Login from "./LogIn";

function MyAccount({
  isLoggedIn,
  setIsLoggedIn,
  loggedUser,
  setLoggedUser,
  userData,
}) {
  return (
    <div>
      {!isLoggedIn ? (
        <Login
          setIsLoggedIn={setIsLoggedIn}
          setLoggedUser={setLoggedUser}
          userData={userData}
        />
      ) : (
        <Redirect to="/home" />
      )}
    </div>
  );
}
export default MyAccount;

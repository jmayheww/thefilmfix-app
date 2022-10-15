import React from "react";
import { Redirect } from "react-router-dom";
import Login from "./LogIn";

function MyAccount({ loggedUser, setLoggedUser, userData }) {
  return (
    <div>
      {loggedUser.length <= 0 ? (
        <Login setLoggedUser={setLoggedUser} userData={userData} />
      ) : (
        <Redirect to="/home" />
      )}
    </div>
  );
}
export default MyAccount;

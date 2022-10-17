import React from "react";
import { Redirect } from "react-router-dom";
import Login from "./LogIn";

function MyAccount({ loggedUser, setLoggedUser, userData }) {
  const loggedUserName = loggedUser.map((user) => user.username);
  return (
    <div>
      {loggedUser.length <= 0 ? (
        <Login setLoggedUser={setLoggedUser} userData={userData} />
      ) : (
        <div className="logged-message">
          <h3>{`Welcome back to The Film Fix App, ${loggedUserName}.`}</h3>
          <h5>Explore our extensive collection of Criterion Films.</h5>
        </div>
      )}
    </div>
  );
}
export default MyAccount;

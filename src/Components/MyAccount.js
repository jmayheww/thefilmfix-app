import React from "react";
import LogIn from "./LogIn";
import Logout from "./Logout";

function MyAccount(isLoggedIn, setIsLoggedIn) {
  console.log(isLoggedIn);
  setIsLoggedIn(true);

  return (
    <div>
      {isLoggedIn ? (
        <LogIn setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <h1>Welcome back! You are logged in.</h1>
      )}
    </div>
  );
}
export default MyAccount;

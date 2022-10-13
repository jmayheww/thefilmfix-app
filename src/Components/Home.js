import React from "react";
import { Redirect } from "react-router-dom";
import Logout from "./Logout";

function Home({ isLoggedIn, setIsLoggedIn, loggedUser }) {
  console.log(loggedUser);
  const [username] = loggedUser;
  return (
    <div className="home">
      {!isLoggedIn ? (
        <div>
          <Redirect to="/myaccount" />
        </div>
      ) : (
        <div>
          <h3>{`Welcome back to The Film Fix App, ${username}. Browse our collection of Criterion films to find your next film fix!`}</h3>
          <Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </div>
      )}
    </div>
  );
}

export default Home;

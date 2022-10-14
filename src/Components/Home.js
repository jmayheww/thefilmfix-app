import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isLoggedIn, loggedUser }) {
  if (!isLoggedIn) return <Redirect to="/myaccount" />;

  const loggedUserName = loggedUser.slice(0, 1).map((user) => user.username);
  return (
    <div className="home">
      <h3>{`Welcome back to The Film Fix App, ${loggedUserName}. Browse our collection of Criterion films to find your next film fix!`}</h3>
    </div>
  );
}

export default Home;

import React from "react";
import { Redirect } from "react-router-dom";

function Home({ loggedUser }) {
  if (loggedUser.length <= 0) return <Redirect to="/myaccount" />;

  const loggedUserName = loggedUser.map((user) => user.username);
  return (
    <div className="home">
      <h3>{`Welcome back to The Film Fix App, ${loggedUserName}. Browse our collection of Criterion films to find your next film fix!`}</h3>
    </div>
  );
}

export default Home;

import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isLoggedIn }) {
  return (
    <div className="home">
      {!isLoggedIn ? (
        <div>
          <Redirect to="/myaccount" />
        </div>
      ) : (
        <div>
          <h3>{`Welcome back to The Film Fix App, ${isLoggedIn}. Browse our collection of Criterion films to find your next film fix!`}</h3>
        </div>
      )}
    </div>
  );
}

export default Home;

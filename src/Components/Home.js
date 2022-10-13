import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Redirect to="/myaccount" />;
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

export default Home;

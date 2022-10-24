import React from "react";
import { Redirect } from "react-router-dom";
import "./Home.css";

function Home({ loggedUser }) {
  if (!loggedUser) return <Redirect to="/myaccount" />;

  return (
    <div className="home">
      <h3 className="home-title">thefilmfix</h3>
      <div className="film-addict">
        <img
          src="https://pbs.twimg.com/media/FFrrTvAXIAQNV9t?format=jpg&name=4096x4096"
          alt="Godard proclaiming his addiction to cinema"
        />
        <h4 className="home-greeting">
          Hi <span className="username">{loggedUser.username}!</span>
        </h4>
        <p>
          <span>thefilmfix</span> app is dedicated to helping wayward film
          buffs, enthusiasts, afficionados, addicts, and fanatics find their
          next "fix" of sublime film experience.
        </p>
      </div>
    </div>
  );
}

export default Home;

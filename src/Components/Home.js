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
          className="home-image"
          width="800"
          height="600"
        />
        <h4>Let <span><i>thefilmfix</i></span> </h4>
      </div>
      <p>
        <span>thefilmfix</span> app is dedicated to helping wayward film buffs,
        enthusiasts, afficionados, addicts, and fanatics find their next film
        "fix".
      </p>

      <h3>
        Search our Criterion Films collection for your desperately wanting "fix"
        of transcendent film experiences that invariably provoke, compel,
        uplift, inspire, devastate, challenge, and wholly transform who you are.
      </h3>
      <h3></h3>
    </div>
  );
}

export default Home;

import React from "react";
import { Redirect } from "react-router-dom";

function Home({ loggedUser }) {
  if (!loggedUser) return <Redirect to="/myaccount" />;


  return (
    <div className="home">
      <img
        src="https://pbs.twimg.com/media/FFrrTvAXIAQNV9t?format=jpg&name=4096x4096"
        alt="Godard proclaiming his addiction to cinema"
        width="800"
        height="600"
      />
      <h3>{`${loggedUser.username}, thefilmfix app is dedicated to helping wayward film buffs, enthusiasts, afficionados, addicts, and fanatics find their next film "fix".`}</h3>

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

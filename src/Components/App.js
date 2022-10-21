import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

import { loginUrl, criterionFilmUrl } from "../Utilities/api-helpers";

import Home from "./Home";
import MyAccount from "./MyAccount";
import FilmPage from "./FilmPage";
import NavBar from "./NavBar";
import Logout from "./Logout";

function App() {
  const [films, setFilms] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState([]);

  useEffect(() => {
    fetch(criterionFilmUrl)
      .then((resp) => resp.json())
      .then((data) => setFilms(data));
  }, []);

  useEffect(() => {
    fetch(loginUrl)
      .then((resp) => resp.json())
      .then((data) => setLoggedUser(data));
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/films">
          <FilmPage films={films} setFilms={setFilms} />
        </Route>
        <Route path="/myaccount">
          <MyAccount
            isLoggedIn={isLoggedIn}
            loggedUser={loggedUser}
            setIsLoggedIn={setIsLoggedIn}
            setLoggedUser={setLoggedUser}
          />
        </Route>
        <Route path="/logout">
          <Logout
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            loggedUser={loggedUser}
            setLoggedUser={setLoggedUser}
          />
        </Route>
        <Route exact path="/">
          <Home
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            loggedUser={loggedUser}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

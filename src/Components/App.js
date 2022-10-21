import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  getFilmData,
  getLoginData,
  getCollectionData,
} from "../Utilities/api-helpers";

import Home from "./Home";
import MyAccount from "./MyAccount";
import FilmPage from "./FilmPage";
import NavBar from "./NavBar";
import Logout from "./Logout";

function App() {
  const [films, setFilms] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null);
  const [userCollection, setUserCollection] = useState([]);

  useEffect(() => {
    getFilmData().then((data) => setFilms(data));
    getLoginData().then((data) => setLoggedUser(data[0]));
  }, []);

  useEffect(() => {
    if (loggedUser) {
      getCollectionData(loggedUser.id).then((data) =>
        setUserCollection(data.collection)
      );
    }
  }, [loggedUser]);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/films">
          <FilmPage
            films={films}
            setFilms={setFilms}
            userCollection={userCollection}
            setUserCollection={setUserCollection}
            user={loggedUser}
          />
        </Route>
        <Route path="/myaccount">
          <MyAccount
            loggedUser={loggedUser}
            setLoggedUser={setLoggedUser}
            userCollection={userCollection}
            setUserCollection={setUserCollection}
          />
        </Route>
        <Route path="/logout">
          <Logout loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
        </Route>
        <Route exact path="/">
          <Home loggedUser={loggedUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

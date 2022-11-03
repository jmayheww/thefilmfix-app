import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  getFilmData,
  getLoginData,
  getCollectionData,
  updateCollection,
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
  const [curFilm, setCurFilm] = useState(0);

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

  function handleAddToCollection() {
    const newCollection = [...userCollection, films[curFilm]];

    updateCollection(newCollection).then((data) => {
      setUserCollection(data.collection);
    });
  }

  function handleRemoveFromCollection(titleToDelete = films[curFilm].Title) {
    const newCollection = userCollection.filter(({ Title }) => {
      return Title !== titleToDelete;
    });
    updateCollection(newCollection).then((data) => {
      setUserCollection(data.collection);
    });
  }

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
            loggedUser={loggedUser}
            user={loggedUser}
            curFilm={curFilm}
            setCurFilm={setCurFilm}
            handleAddToCollection={handleAddToCollection}
            handleRemoveFromCollection={handleRemoveFromCollection}
          />
        </Route>
        <Route path="/myaccount">
          <MyAccount
            loggedUser={loggedUser}
            setLoggedUser={setLoggedUser}
            userCollection={userCollection}
            setUserCollection={setUserCollection}
            setCurFilm={setCurFilm}
            handleRemoveFromCollection={handleRemoveFromCollection}
          />
        </Route>
        <Route path="/logout">
          <Logout
            loggedUser={loggedUser}
            setLoggedUser={setLoggedUser}
            setUserCollection={setUserCollection}
          />
        </Route>
        <Route exact path="/">
          <Home loggedUser={loggedUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

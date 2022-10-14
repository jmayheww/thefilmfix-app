import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home";
import MyAccount from "./MyAccount";
import FilmPage from "./FilmPage";
import MyFilmsList from "./MyFilmsList";
import NavBar from "./NavBar";
import Logout from "./Logout";

function App() {
  const userData = "http://localhost:3000/user-login";
  const criterionFilmData = "http://localhost:3000/criterion-database";

  const [films, setFilms] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState([]);

  useEffect(() => {
    fetch(criterionFilmData)
      .then((resp) => resp.json())
      .then((data) => setFilms(data));
  }, []);

  useEffect(() => {
    fetch(userData)
      .then((resp) => resp.json())
      .then((data) => setLoggedUser(data));
  }, []);

  console.log(loggedUser);

  return (
    <div>
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route path="/filmpage">
          <FilmPage films={films} />
        </Route>
        <Route path="/myaccount">
          <MyAccount
            isLoggedIn={isLoggedIn}
            loggedUser={loggedUser}
            setIsLoggedIn={setIsLoggedIn}
            setLoggedUser={setLoggedUser}
            userData={userData}
          />
        </Route>
        <Route path="/myfilmslist">
          <MyFilmsList />
        </Route>
        <Route path="/logout">
          <Logout
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            loggedUser={loggedUser}
            userData={userData}
            setLoggedUser={setLoggedUser}
          />
        </Route>
        <Route exact path="/home">
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

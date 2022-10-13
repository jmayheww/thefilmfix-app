import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home";
import MyAccount from "./MyAccount";
import FilmPage from "./FilmPage";
import MyFilmsList from "./MyFilmsList";
import NavBar from "./NavBar";
import Logout from "./Logout";

function App() {
  const [films, setFilms] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/criterion-database")
      .then((resp) => resp.json())
      .then((data) => setFilms(data));
  }, []);

  return (
    <div>
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route path="/filmpage">
          <FilmPage films={films} />
        </Route>
        <Route path="/myaccount">
          <MyAccount isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/myfilmslist">
          <MyFilmsList />
        </Route>
        <Route path="/logout">
          <Logout setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/home">
          <Home isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

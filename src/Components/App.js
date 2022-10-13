import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home";
import LogIn from "./LogIn";
import FilmPage from "./FilmPage";
import MyFilmsList from "./MyFilmsList";
import NavBar from "./NavBar";

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
        <Route exact path="/filmpage">
          <FilmPage films={films} />
        </Route>
        <Route exact path="/login">
          <LogIn setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/myfilmslist">
          <MyFilmsList />
        </Route>
        <Route exact path="/">
          <Home isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

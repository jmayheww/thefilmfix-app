import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";
import LogIn from "./LogIn";
import FilmsPage from "./FilmsPage";
import NavBar from "./NavBar";

function App() {
  useEffect(() => {
    fetch("http://localhost:3004/criterion-database")
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/filmspage">
          <FilmsPage />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

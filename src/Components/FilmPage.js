import React, { useState } from "react";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import NewFilmForm from "./NewFilmForm";
import Search from "./Search";
import FilmList from "./FilmList";
import FilmShow from "./FilmShow";

function FilmPage({ films }) {
  const match = useRouteMatch();
  const [position, setPosition] = useState(0);
  const DISPLAY_COUNT = 8;
  const [showDetails, setShowDetails] = useState([]);

  console.log(match);

  function showMoreFilms() {
    setPosition((position + DISPLAY_COUNT) % films.length);
  }

  function showPreviousFilms() {
    setPosition((position - DISPLAY_COUNT) % films.length);
  }

  function resetFilms() {
    setPosition(0);
  }

  return (
    <main>
      <div className="films-container">
        <NewFilmForm />
        <Search />
        <FilmList
          films={films.slice(position, position + DISPLAY_COUNT)}
          numFilms={films.length}
          position={position}
          handlePreviousClick={showPreviousFilms}
          handleNextClick={showMoreFilms}
          handleReset={resetFilms}
        />
        <Route path={`${match.url}/:filmId`}>
          <FilmShow
            films={films}
            showDetails={showDetails}
            setShowDetails={setShowDetails}
          />
        </Route>
      </div>
    </main>
  );
}

export default FilmPage;

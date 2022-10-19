import React, { useEffect, useRef, useState } from "react";
import { Redirect, Route, useHistory, useRouteMatch } from "react-router-dom";
import Search from "./Search";
import FilmList from "./FilmList";
import FilmShow from "./FilmShow";
import "./FilmPage.css";

function FilmPage({ films }) {
  const history = useHistory();
  const match = useRouteMatch();
  const [position, setPosition] = useState(0);
  const DISPLAY_COUNT = 8;
  const [showDetails, setShowDetails] = useState([]);
  const scrollerRef = useRef(null);

  useEffect(() => {
    resetPageElements();
  }, []);

  function resetPageElements(filmId = 0) {
    history.push(`/films/${filmId}`);
    scrollerRef.current.scrollTo(0, 0);
  }

  function showMoreFilms() {
    setPosition((position + DISPLAY_COUNT) % films.length);
    resetPageElements((position + DISPLAY_COUNT) % films.length);
  }

  function showPreviousFilms() {
    setPosition((position - DISPLAY_COUNT) % films.length);
    resetPageElements((position - DISPLAY_COUNT) % films.length);
  }

  function resetFilms() {
    setPosition(0);
    resetPageElements();
  }

  return (
    <main>
      <div className="films-container">
        <div className="scroll-container" ref={scrollerRef}>
          <Search />
          <FilmList
            films={films.slice(position, position + DISPLAY_COUNT)}
            numFilms={films.length}
            position={position}
            handlePreviousClick={showPreviousFilms}
            handleNextClick={showMoreFilms}
            handleReset={resetFilms}
          />
        </div>
        <div className="detail-container">
          <Route path={`${match.url}/:filmId`}>
            <FilmShow
              films={films}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
            />
          </Route>
        </div>
      </div>
    </main>
  );
}

export default FilmPage;

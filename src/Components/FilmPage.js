import React, { useEffect, useRef, useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import Search from "./Search";
import FilmList from "./FilmList";
import FilmShow from "./FilmShow";
import "./FilmPage.css";

function FilmPage({
  films,
  userCollection,
  setUserCollection,
  user,
  curFilm,
  setCurFilm,
  handleAddToCollection,
  handleRemoveFromCollection,
}) {
  const history = useHistory();
  const match = useRouteMatch();
  const [position, setPosition] = useState(0);
  const DISPLAY_COUNT = 8;
  const [filteredFilms, setFilteredFilms] = useState([]);
  const scrollerRef = useRef(null);

  useEffect(() => {
    resetPageElements();
    setFilteredFilms(films);
  }, [films]);

  function resetPageElements(filmId = 0) {
    history.push(`/films/${filmId}`);
    setTimeout(() => {
      scrollerRef.current.scrollTo(0, 0);
    }, 100);
    document.querySelector(".search-input").value = "";
  }

  function showMoreFilms() {
    setPosition((position + DISPLAY_COUNT) % filteredFilms.length);
    resetPageElements((position + DISPLAY_COUNT) % filteredFilms.length);
  }

  function showPreviousFilms() {
    setPosition((position - DISPLAY_COUNT) % filteredFilms.length);
    resetPageElements((position - DISPLAY_COUNT) % filteredFilms.length);
  }

  function resetFilms() {
    setFilteredFilms(films);
    setPosition(0);
    resetPageElements();
  }

  return (
    <main>
      <div className="search">
        <Search films={films} setFilterFilms={setFilteredFilms} />
      </div>
      <br />
      <div className="films-container">
        <div className="scroll-container" ref={scrollerRef}>
          <FilmList
            films={filteredFilms.slice(position, position + DISPLAY_COUNT)}
            numFilms={filteredFilms.length}
            displayCount={DISPLAY_COUNT}
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
              userCollection={userCollection}
              setUserCollection={setUserCollection}
              user={user}
              curFilm={curFilm}
              setCurFilm={setCurFilm}
              handleAddToCollection={handleAddToCollection}
              handleRemoveFromCollection={handleRemoveFromCollection}
            />
          </Route>
        </div>
      </div>
    </main>
  );
}

export default FilmPage;

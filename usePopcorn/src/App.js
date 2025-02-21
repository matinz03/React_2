import { useState } from "react";
import WatchedMoviesList from "./WatchedMoviesList";
import WatchedSummary from "./WatchedSummary";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import { useMovies } from "./useMovies";
import Search from "./Search";
import { useLocalStorage } from "./useLocalStorage";
export const KEY = process.env.REACT_APP_API_KEY;

export default function App() {
  const [query, setQuery] = useState("");
  const { movies, error, isLoading } = useMovies(query);
  const [watched, setWatched] = useLocalStorage( "watched");

  const [selectedId, setSelectedId] = useState(null);

  function handleSelectedId(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }
  function handleCloseBtn() {
    setSelectedId(null);
  }
  function handleAddMovie(movie) {
    setWatched([...watched, movie]);
  }
  function handleDeleteWatched(id) {
    setWatched((movie) => movie.filter((item) => item.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              handleSelectedId={handleSelectedId}
              handleCloseBtn={handleCloseBtn}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <>
              <MovieDetails
                selectedId={selectedId}
                onCloseBtn={handleCloseBtn}
                onAddMovie={handleAddMovie}
                watched={watched}
                key={selectedId}
              />
            </>
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                onDelete={handleDeleteWatched}
                watched={watched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
export function Loader() {
  return <p className="loader">Loading...</p>;
}
function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>🛑</span>
      {message}
    </p>
  );
}

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}

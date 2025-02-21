import WatchedMovie from "./WatchedMovie";
export default function WatchedMoviesList({ watched, onDelete }) {
  return (
    <ul className="list list-movies">
      
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} onDelete={onDelete} />
      ))}
    </ul>
  );
}

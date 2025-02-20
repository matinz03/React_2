import { useRef, useEffect } from "react";
export default function Search({ query, setQuery }) {
  const searchRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = () => {
      searchRef.current.focus();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <input
      ref={searchRef}
      id="searchBar"
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

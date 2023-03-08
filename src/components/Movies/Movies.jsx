import { nanoid } from "nanoid";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Movies({ KEY }) {
  const [search, setSearch] = useState("");
  const [movieArray, setMovieArray] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${e.target.search.value}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMovieArray(res.results);
      });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="search" value={search} onChange={onChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movieArray &&
          movieArray.map((movie) => {
            const pathString = `/movies/${movie.id}`;
            return (
              <li key={nanoid()}>
                <Link to={pathString}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}

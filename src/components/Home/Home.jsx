import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

export default function Home({ KEY }) {
  const [movieArray, setMovieArray] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}&query=Jack+Reacher`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMovieArray(res.results);
      });
  }, [KEY]);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movieArray.map((movie) => {
          const pathString = `/movies/${movie.id}`;
          return (
            <li key={nanoid()}>
              <Link to={pathString}>{movie.title}</Link>{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
}

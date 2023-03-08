import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MoviePreview({ KEY }) {
  const { id } = useParams();

  const [movie, setMovie] = useState();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMovie(res);
      });
  }, [id, KEY]);

  const navigate = useNavigate();
  const handleBtn = () => {
    navigate(-1);
  };

  return (
    <>
      <button onClick={handleBtn}>Go back</button>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>User Score: {Math.floor(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name + " ")}</p>
          <h3>Additional information</h3>
        </div>
      )}
    </>
  );
}

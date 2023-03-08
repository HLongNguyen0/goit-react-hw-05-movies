import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import MoviePreview from "./MoviePreview/MoviePreview";
import Movies from "./Movies/Movies";
import NotFound from "./NotFound";

function App() {
  const KEY = "50f4de71d8d6f84a0d2ac79b823a444e";

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home KEY={KEY} />} />
        <Route path="/movies">
          <Route index element={<Movies KEY={KEY} />} />
          <Route path=":id" element={<MoviePreview KEY={KEY} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

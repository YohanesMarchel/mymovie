// import { FiSearch } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import { getMoviesList, searchMovies } from "../api";
import Pagination from "./Pagination";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { data } from "autoprefixer";
import logo from "./../image/img1.jpg";

const Body = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMoviesList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovies(q);
      setPopularMovies(query.results);
      console.log({ query: query });
    }
  };

  const PopularMoviesList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <>
          <div className="movie-wrapper" key={i}>
            <img
              className="movie-img"
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            />
            <div className="movie-title">{movie.title}</div>
            <div className="movie-date">{movie.release_date}</div>
            <div className="movie-main-rate">{movie.vote_average}</div>
            <div className="info-hover">
              <div><a href="/detailmovie" className="movie-title">{movie.title}</a></div>
              <div className="movie-date">{movie.release_date}</div>
              <div className="movie-rate">{movie.vote_average}</div>
            </div>
        
          </div>

        </>
      );
    });
  };

  return (
    <>
      <p className="title" id="explor">
        Watch your film for fun
      </p>

      <div className="introduction">
        <input
          placeholder="Search your favorite film..."
          className="movie-search"
          onChange={({ target }) => search(target.value)}
        />
      </div>

      <div className="pagination">
        <button>Prev</button>
        <p>1 / 3</p>
        <button>Next</button>
      </div>

      <div className="movie-container">
        <PopularMoviesList />
      </div>
    </>
  );
};

export default Body;

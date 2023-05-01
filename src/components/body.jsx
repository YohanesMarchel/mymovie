// import { FiSearch } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { data } from "autoprefixer";
import logo from'./../image/img1.jpg'

const Body = (props) => {
  return (
    <>
      <p className="title" id="explor">
        Watch your film for fun
      </p>
      <div className="introduction">
        {/* <input
          placeholder="Search your favorite film..."
          className="movie-search"
          onChange={({ target }) => props.search(target.value)}
        /> */}
        {/* <button><FiSearch/></button> */}
      </div>

      {/* <div className="movie-container">{props.listMovies()}</div> */}
      <div className="movie-container">
        <div className="movie-wrapper">
          <img
            className="movie-img"
            src={logo}
          />
          <div className="movie-title">Spider Man</div>
          <div className="movie-date">13-05-2021</div>
          <div className="movie-rate">7.2</div>
          <div className="info-hover">
            <div className="movie-title">Spider Man</div>
            <div className="movie-date">13-05-2021</div>
            <div className="movie-rate">7.2</div>
          </div>
        </div>
        <div className="movie-wrapper">
          <img
            className="movie-img"
            src={require('./../image/movie2.jpg')}
          />
          <div className="movie-title">The Host</div>
          <div className="movie-date">Jul 27, 2006</div>
          <div className="movie-rate">6.9</div>
          <div className="info-hover">
            <div className="movie-title">The Host</div>
            <div className="movie-date">Jul 27, 2006</div>
            <div className="movie-rate">7.0</div>
          </div>
        </div>
        <div className="movie-wrapper">
          <img
            className="movie-img"
            src={require('./../image/movie3.jpg')}
          />
          <div className="movie-title">Shazam! Fury of the Gods</div>
          <div className="movie-date">Mar 15, 2023</div>
          <div className="movie-rate">7.2</div>
          <div className="info-hover">
            <div className="movie-title">Shazam! Fury of the Gods</div>
            <div className="movie-date">Mar 15, 2023</div>
            <div className="movie-rate">7.2</div>
          </div>
        </div>
        <div className="movie-wrapper">
          <img
            className="movie-img"
            src={require('./../image/movie3.jpg')}
          />
          <div className="movie-title">Shazam! Fury of the Gods</div>
          <div className="movie-date">Mar 15, 2023</div>
          <div className="movie-rate">7.2</div>
          <div className="info-hover">
            <div className="movie-title">Shazam! Fury of the Gods</div>
            <div className="movie-date">Mar 15, 2023</div>
            <div className="movie-rate">7.2</div>
          </div>
        </div>
        <div className="movie-wrapper">
          <img
            className="movie-img"
            src={require('./../image/movie3.jpg')}
          />
          <div className="movie-title">Shazam! Fury of the Gods</div>
          <div className="movie-date">Mar 15, 2023</div>
          <div className="movie-rate">7.2</div>
          <div className="info-hover">
            <div className="movie-title">Shazam! Fury of the Gods</div>
            <div className="movie-date">Mar 15, 2023</div>
            <div className="movie-rate">7.2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;

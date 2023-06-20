import { FiTv } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { Axios } from "axios";
import "./../css/detailmovie.css";
import logo from "./../image/img1.jpg";
import { FiStar } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";

const DetailMovie = (props) => {
  let params = useParams();
  // const [movieDetail, setMovieDetail] = useState([]);

  // useEffect(() => {
  //   // getMoviesDetail().then((result) => {
  //   //   setMovieDetail(result);
  //   // });
  //   // getMoviesDetail = async () => {
  //   //   // const movie = await axios.get(
  //   //   //   `${process.env.REACT_APP_BASEURL}/movie/popular?api_key=${process.env.REACT_APP_APIKEY}/id=${params.id}`
  //   //   // );
  //   //   console.log({getMoviesList: movie})
  //   //   return movie.data.results;
  //   // };
  // }, []);

  const DetailMvView = () => {
    // return movieDetail.map((movie, i) => {
    return (
      <>
        {/* <div className="movie-wrapper" key={i}>
            <img
              className="movie-img"
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            />
            <div className="movie-title">{movie.title}</div>
            <div className="movie-date">{movie.release_date}</div>
            <div className="movie-main-rate">{movie.vote_average}</div>
            <div className="info-hover">
              <div>
                <Link to={`/detailmovie/${movie.id}`} className="movie-title">
                  {movie.title}
                </Link>
              </div>
              <div className="movie-date">{movie.release_date}</div>
              <div className="movie-rate">{movie.vote_average}</div>
            </div>
          </div> */}
        <div className="detailmv-container">
          <div className="card-detail-movie">
            <div className="img-wrap">
              <img src={logo} className="" />
            </div>
            <div className="dec">
              <p className="mv-title text-3xl text-blue-500 ">
                John Wick: Chapter 4
              </p>
              <h2 className="text-1xl">
                <FiStar />
                7.8
              </h2>
              <span>23-04-2021 {params.id} </span>
              <p className="mv-slug">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates aliquid laborum totam quia atque nam, doloremque fuga
                aspernatur id quibusdam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptates aliquid laborum totam quia atque
                nam, doloremque fuga aspernatur id quibusdam!
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <>
        <DetailMvView />
      </>
    </>
  );
};

export default DetailMovie;

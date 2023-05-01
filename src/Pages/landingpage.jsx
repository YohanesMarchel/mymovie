import React, { useEffect, useState } from "react";
import { getMoviesList, searchMovies } from "../api";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Hero from "../components/hero";
import Body from "../components/body";
import Body2 from "../components/body2";
import Body3 from "../components/body3";
import Ques from "../components/questions";
import Footer from "../components/footer";

const LandingPage = () => {
  // const [popularMovies, setPopularMovies] = useState([]);
  // useEffect(() => {
  //   getMoviesList().then((result) => {
  //     setPopularMovies(result);
  //   });
  // }, []);

  // const search = async (q) => {
  //   if(q.length > 3){
  //     const query = await searchMovies(q);
  //     setPopularMovies(query.results)
  //     console.log({query : query})
  //   }
  // };

  // const popularMoviesList = () => {
  //   return popularMovies.map((movie, i) => {
  //     return (
  //       <>
  //       <div className="movie-wrapper" key={i}>
  //         <img
  //           className="movie-img"
  //           src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
  //         />
  //         <div className="movie-title">{movie.title}</div>
  //         <div className="movie-date">{movie.release_date}</div>
  //         <div className="movie-rate">{movie.vote_average}</div>
  //         <div className="info-hover">
  //           <div className="movie-title">{movie.title}</div>
  //           <div className="movie-date">{movie.release_date}</div>
  //           <div className="movie-rate">{movie.vote_average}</div>
  //         </div>
  //       </div>

  //   </>
  //     );
  //   });
  // };

  const [navbar, setNavbar] = useState(false);
  const navOnScroll = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", navOnScroll);

  return (
    <>
      <nav className={navbar ? "my-header active" : "my-header"}>
        <Link to="/login">Sign In</Link>
      </nav>
      <div className="App">
        <header className="App-header">
          <div className="global-container">
            <Hero />
          </div>
          {/* <Body listMovies={popularMoviesList} search={search} /> */}
          <Body />
        </header>
      </div>
      <Body2 />
      <Body3/>
      <Ques/>
      <Footer/>
    </>
  );
};

export default LandingPage;

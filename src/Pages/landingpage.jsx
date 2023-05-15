import React, { useEffect, useState } from "react";
// import { getMoviesList, searchMovies } from "../api";
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
      <Body3 />
      <Ques />
      <Footer />
    </>
  );
};

export default LandingPage;

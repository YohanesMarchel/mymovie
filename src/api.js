import axios, { Axios } from "axios";

export const getMoviesList = async () => {
  const movie = await axios.get(
    `${process.env.REACT_APP_BASEURL}/movie/popular?api_key=${process.env.REACT_APP_APIKEY}`
  );
  // console.log({getMoviesList: movie})
  return movie.data.results;
};
export const searchMovies = async (q) => {
  const search = await axios.get(`${process.env.REACT_APP_BASEURL}/search/movie?query=${q}&api_key=${process.env.REACT_APP_APIKEY}`);
  // console.log(q);
  return search.data
};
export const getMoviesDetail = async () => {
  const movie = await axios.get(
    `${process.env.REACT_APP_BASEURL}/movie/popular?api_key=${process.env.REACT_APP_APIKEY}`
  );
  // console.log({getMoviesList: movie})
  return movie.data.results;
};
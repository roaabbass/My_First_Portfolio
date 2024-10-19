import axios from 'axios';

const API_KEY = ' 4fdd443f';  
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchMovies = async (query) => {
  const { data } = await axios.get(`${BASE_URL}&s=${query}`);
  return data.Search;
};

export const fetchMovieDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}&i=${id}`);
  return data;
};

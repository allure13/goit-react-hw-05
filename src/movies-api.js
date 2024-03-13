import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGZkMTMwOGMxZDhkMGU1NmJjZGQyOWI5YTI5YmZjNyIsInN1YiI6IjY1ZWM1OThlYjdkMzUyMDE3YmU2MGNhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XODY7ijfqoIUz5f7DKLTfYVzXszqC7Gmgx3_wy2QDNY',
    Accept: 'application/json',
  },
};

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

export const fetchMovie = async () => {
  const response = await axios.get(url, options).catch(err => console.log(err));

  return response.data.results;
};

export const searchMovie = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options,
  );
  return response.data.results;
};

export const movieDetails = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options,
  );
  return response.data;
};

// export const movieCredits = async castInfo => {
//   const response = await axios.get(
//     `https://api.themoviedb.org/3/movie/${castInfo}/credits?language=en-US`,
//     options,
//   );
//   return response.data;
// };

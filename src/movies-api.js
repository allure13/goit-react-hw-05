import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGZkMTMwOGMxZDhkMGU1NmJjZGQyOWI5YTI5YmZjNyIsInN1YiI6IjY1ZWM1OThlYjdkMzUyMDE3YmU2MGNhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XODY7ijfqoIUz5f7DKLTfYVzXszqC7Gmgx3_wy2QDNY',
  },
};

const url = '/trending/movie/day?language=en-US';

export const fetchMovie = async () => {
  const response = await axios.get(url, options);
  console.log('JS response.data', response.data);
  return response.data;
};

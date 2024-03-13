import Loader from 'components/Loader/Loader';
import { movieDetails } from '../movies-api';
import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

export default function MovieDetails() {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const defaultImg =
    '<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>';
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovieById() {
      try {
        setIsLoading(true);
        const data = await movieDetails(movieId);
        setInfo(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieById();
  }, [movieId]);

  return (
    <>
      <Link to={backLink.current}>Go back bro</Link>
      {isLoading && <Loader />}
      {error && <div>Something went wrong. Try reload</div>}
      {info && (
        <div>
          <div>
            <img
              src={
                info.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${info.poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
          </div>
          <h3>{info.title}</h3>
          <p>User score: {Math.round(info.vote_average * 10)}%</p>
          <h4>Overview</h4>
          <p>{info.overview}</p>
          <h4>Genres</h4>
          <p>{info.genres.map(genre => genre.name).join(', ')}</p>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
      <Suspense fallback={<div>Loading info... Pls w8</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

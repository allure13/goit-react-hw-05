import Loader from 'components/Loader/Loader';
import { movieCredits } from '../../movies-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css';

export default function MovieCast() {
  const { movieId } = useParams();
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const defaultPoster = `https://pixabay.com/ru/photos/%D0%B1%D0%B5%D0%BB%D0%BA%D0%B0-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0-%D0%B3%D1%80%D1%8B%D0%B7%D1%83%D0%BD-8592682/`;

  useEffect(() => {
    async function getInfo() {
      try {
        setIsLoading(true);
        const data = await movieCredits(movieId);
        setInfo(data);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getInfo();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <div>Something went wrong. Try reload</div>}
      {info && info.length > 0 && (
        <ul className={css.list}>
          {info.map(({ cast_id, character, name, profile_path }) => (
            <li className={css.item} key={cast_id}>
              <img
                className={css.img}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultPoster
                }
                width={300}
                alt={name}
              />
              <p className={css.title}>{name}</p>
              <p className={css.title}>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

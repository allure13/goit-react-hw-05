import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ movies }) {
  const location = useLocation();
  // console.log(location);

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

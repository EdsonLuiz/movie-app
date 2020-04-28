import React from 'react'
import PropTypes from 'prop-types'
import { MovieItem, MovieContent } from '../common';

const Movie = props => {
  const {title, summary, poster, year, genres} = props
  return (
    <MovieItem>
      <img src={poster} alt={title} title={title} />
      <MovieContent>
        <h2>{title}</h2>
        <h3>{year}</h3>
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <p>{summary.slice(0, 140)}...</p>
      </MovieContent>
    </MovieItem>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie

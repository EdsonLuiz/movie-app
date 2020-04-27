import React from 'react'
import PropTypes from 'prop-types'

const Movie = props => {
  const {title, summary, poster, year, genres} = props
  return (
    <>
      <img src={poster} alt={title} title={title} />
      <div>
        <h2>{title}</h2>
        <span>{year}</span>
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
          <p>{summary}</p>
      </div>
    </>
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

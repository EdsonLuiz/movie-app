import React from 'react'
import PropTypes from 'prop-types'

const Movie = props => {
  const {id, title, summary, poster, year} = props
  return (
    <div>
      <h4>{title}</h4>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
}

export default Movie

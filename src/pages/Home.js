import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Movie from '../components/Movie';
import { GlobalStyle } from '../styles/global';
import { Loader } from '../components/common/Loader';
import { MovieList, Container } from '../components/common';

const BASE_URL = "https://yts-proxy.now.sh/list_movies.json";

function Home() {
  const [moviesState, setMoviesState] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get(`${BASE_URL}?sort_by=rating`);

    setMoviesState(movies)
    setIsLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Container>
      <GlobalStyle />

      {isLoading ? <Loader>Loading...</Loader>
        : <MovieList>{
          moviesState.map(
            movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres} />))
        }</MovieList>


      }


    </Container>
  );
}

export default Home;

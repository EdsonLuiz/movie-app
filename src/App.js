import React, {useState, useEffect} from 'react';
import axios from 'axios'

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getMovies = async() => {
    const data = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    setMovies(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      {isLoading ? <h1>Loading...</h1>
      :<h1>OK</h1>
      }

    </div>
  );
}

export default App;

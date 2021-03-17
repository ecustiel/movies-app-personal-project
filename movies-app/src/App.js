import React, {useEffect, useState} from 'react';
import MovieScreen from './components/MovieScreen';
import {Api_Call} from './components/helpers/ApiData'

const App = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(Api_Call)
    .then(res => res.json())
    .then((mov) => {
      console.log(mov);
      setMovies(mov.results);
    })

  }, [])

  return (
    <div>
    {movies.length > 0 && movies.map((movie) =>
      
      <MovieScreen key={movie.id} {...movie}/>

      )}
      </div>
  )
}


export default App;

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
    <>
    <header>
      <input 
        className='search' 
        type='search' 
        placeholder='Buscar...' 

      />
    </header>
    <div className='movie-container'>


    {movies.length > 0 && movies.map((movie) =>
      
      <MovieScreen key={movie.id} {...movie}/>

      )}
      </div>
      </>
  )
}


export default App;

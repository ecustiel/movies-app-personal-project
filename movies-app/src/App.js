import React, {useEffect, useState} from 'react';
import MovieScreen from './components/MovieScreen';
import {Api_Call, Api_Search} from './components/helpers/ApiData'

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('')

  useEffect(() => {
    fetch(Api_Call)
    .then(res => res.json())
    .then((mov) => {
      setMovies(mov.results);
    })

  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {

    fetch(Api_Search+searchTerm)
    .then(res => res.json())
    .then((mov) => {
      setMovies(mov.results);
    })

    setsearchTerm('');
  }
  }

  const handleOnChange = (e) => {
    setsearchTerm(e.target.value);
  }

  return (
    <>
    <header>
    <form onSubmit={handleOnSubmit}>
      <input 
        className='search' 
        type='search' 
        placeholder='Buscar...' 
        value={searchTerm}
        onChange={handleOnChange}
      />
    </form>
      
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

import React from 'react';
import {Api_Imgs} from './helpers/ApiData';

const MovieScreen = ({poster_path, overview, title, vote_average}) => {
    return (
        <div className='movie'>
           <img
                src={Api_Imgs + poster_path} 
                alt={title}
            />
            <div className='movie-info'>
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>

            <div className='movie-over'>
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>

        </div>
    )
}

export default MovieScreen
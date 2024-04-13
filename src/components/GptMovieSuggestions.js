import React from 'react';
import {useSelector} from "react-redux";
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const gpt = useSelector(store => store.gpt);
  const {gptMoviesResult, gptMoviesNames} = gpt;
  if(!gptMoviesNames) return null;
  return (
    <div className='bg-black text-white mt-2 bg-opacity-80 text-wrap'>
      {gptMoviesNames.map( (movie, index) => (
        <MovieList key={movie} title={movie} movies={gptMoviesResult[index]}/>
      ))}
    </div>
  )
}

export default GptMovieSuggestions;
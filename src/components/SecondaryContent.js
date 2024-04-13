import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContent = () => {
    const movies = useSelector((store) => store.movies);
  return (
    movies && <div className='bg-black'>
        <div className='mt-0 md:-mt-64 z-60'>
        <MovieList title={"recently Played"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Now Playing"} movies={movies.popularMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContent
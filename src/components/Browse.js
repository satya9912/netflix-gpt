import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContent from './MainContent';
import SecondaryContent from './SecondaryContent';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Gptsearch from './Gptsearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
    <Header />
    {showGptSearch ? (
       <Gptsearch />
    )  : (
          <>
          <MainContent />
          <SecondaryContent />
          </>
    )
    }
    </>
  )
}

export default Browse;
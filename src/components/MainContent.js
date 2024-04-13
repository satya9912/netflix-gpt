import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContent = () => {
    const movies = useSelector((store) => store.movies.nowPlayingMovies);
    if(!movies) return;
    const {title, overview, id} = movies[0];
  return (
    <div className='mt-28 md:mt-0'>
        <VideoTitle title={title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContent;
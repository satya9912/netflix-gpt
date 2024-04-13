import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-36 ml-3' >
        <img alt='movie-poster' src={IMAGE_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard;
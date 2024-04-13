import React from 'react'

const VideoTitle = (props) => {
    const {title, overview} = props;
  return (
    <div className='absolute pt-[10%] px-16 text-white bg-gradient-to-b from-black w-screen aspect-video'>
        <h1 className='font-semibold text-lg md:text-4xl mb-5'>{title}</h1>
        <p className='text-base invisible md:visible md:w-1/4 md:mb-4'>{overview}</p>
        <div className='-mt-40 md:mt-0'>
            <button className='bg-white px-2 md:px-4 md:py-2 py-1 text-black mr-2 rounded-md text-sm md:text-lg hover:opacity-80 font-medium'>Play now</button>
            <button className='bg-gray-500 px-4 py-2 bg-opacity-50 hover:opacity-80 text-white rounded-md text-lg invisible md:visible font-semibold'>more info</button>
        </div>
    </div>
  )
}

export default VideoTitle
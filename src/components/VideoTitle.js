import React from 'react'

const VideoTitle = ({title,overview}) => {

  return (
    <div className='w-screen aspect-video pt-[10%] px-4 md:px-16 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-xl md:text-4xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-4 text-base w-1/3'>{overview}</p>
      <div className='my-3 md:m-0'>
        <button className='bg-white text-black hover:scale-105 py-2 md:py-3 px-4 md:px-8 text-base rounded-md hover:bg-opacity-80'>Play</button>
        <button className='hidden md:inline-block bg-gray-500 mx-2 hover:scale-105 text-white py-2 px-6 text-base bg-opacity-50 rounded-md hover:bg-opacity-80'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
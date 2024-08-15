import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null
  return (
    <div className='w-28 md:w-36 pr-4 hover:scale-105 transition-transform duration-200'>
        <img
            src={IMG_CDN_URL + posterPath}
            alt="Movie Card"
            className='rounded-lg'
        />
    </div>
  )
}

export default MovieCard

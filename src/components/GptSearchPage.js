import React from 'react';
import GptSearchBar from './GptSearchBar';
import { NETFLIX_BACKGROUND } from '../utils/constant';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearchPage = () => {
  return (
    <>
      <div className='fixed -z-10 w-full h-full'>
        <img
          className='w-full h-full object-cover'
          src={NETFLIX_BACKGROUND}
          alt="backgroundimage"
        />
      </div>
      <div className='relative z-10'>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;

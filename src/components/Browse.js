import React from 'react'
import Header from './Header.js'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js';
import MainContainer from './MainContainer.js';
import SecondaryContainer from './SecondaryContainer.js';
import usePopularMovies from '../hooks/usePopularMovies.js';
import useTopRatedMovies from '../hooks/useTopRatedMovies.js';
import useUpcomingMovies from '../hooks/useUpcomingMovies.js';
import useSeries from '../hooks/useSeries.js';

import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage.js';


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useSeries();


  return (

    <div>
    <Header/>
    {showGptSearch
    ?<GptSearchPage/>:
    <>
    <MainContainer/>
    <SecondaryContainer/> 
    </>
    }
    {
      /*
        main container
          - videoBackground
          - video title

        SecondaryContainer
          - movielists * n
            - cards * n
       */
    }
    {console.log('OPEN_AI_KEY:', process.env.REACT_APP_OPEN_AI_KEY)}

    </div>
  )
}

export default Browse
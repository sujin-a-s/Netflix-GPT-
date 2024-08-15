import React, { useState } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from "../utils/gemini"
import { useRef } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { addGptMovieResults } from '../utils/gptslice'
import { throttle } from 'lodash'

const GptSearchBar = () => {
  
  const dispatch = useDispatch();
  const langKey = useSelector(store => store.config.lang)
  const searchText = useRef(null);




  //searrch movie in tmdb database
  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    return json.results;
  }



  
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);

  const throttledSearchMovieTMDB = throttle(searchMovieTMDB, 1000);

  const handleGptSearchClick = async () => {
    if (isSearching) return;
    setIsSearching(true);
    setError(null);

    try {
      console.log(searchText.current.value);

      const getQuery = "Act as a Movie Recommendation System and suggest some movies for the query " +
        searchText.current.value +
        ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: ghill,bigil,shajahan,mersel,thirumalai";

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: getQuery }],
        model: 'gpt-4-turbo',
      });

      if (!gptResults.choices?.[0]?.message?.content) {
        throw new Error('Error in GPT API response');
      }

      console.log(gptResults.choices?.[0]?.message?.content);

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
      if (gptMovies[0] === "Sorry") throw new Error("Your request cannot be processed");

      const promiseArray = gptMovies.map(movie => throttledSearchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);

      dispatch(addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults }));
    } catch (err) {
      console.error("Error:", err.message);
      setError(err.message);
    } finally {
      setIsSearching(false);
    }
  };


  
  

  
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
          
            <input
             ref = {searchText}
             className='p-4 m-4 col-span-9 '
             type="text"
             placeholder={lang[langKey].gptSearchPlaceholder}
             />

            <button onClick={handleGptSearchClick} className='col-span-3 p-4 m-4 bg-red-700 text-white rounded-md hover:scale-105 hover:bg-red-600'>
              {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}


export default GptSearchBar
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addNowPlayingMovies, addPopularMovies } from "../utils/movieslice"
import { API_OPTIONS } from '../utils/constant.js'
import { useSelector } from 'react-redux';

const usePopularMovies = () => {
    const dispatch = useDispatch()

    
    const PopularMovies =  useSelector(store => store.movies.PopularMovies)
    const getPopularMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS)
      const json = await data.json();
      // console.log(json.results)
      dispatch(addPopularMovies(json.results))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
       !PopularMovies && getPopularMovies();
    },[])
}

export default usePopularMovies;
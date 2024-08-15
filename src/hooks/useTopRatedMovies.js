import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {addTopRatedMovies} from "../utils/movieslice"
import { API_OPTIONS } from '../utils/constant.js'
import { useSelector } from 'react-redux';

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
  
    const TopRatedMovies =  useSelector(store => store.movies.TopRatedMovies)
    const getTopRatedMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS)
      const json = await data.json();
      // console.log(json.results)
      dispatch(addTopRatedMovies(json.results))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
         !TopRatedMovies && getTopRatedMovies();
    },[])
}

export default useTopRatedMovies;
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {addUpcomingMovies} from "../utils/movieslice"
import { API_OPTIONS } from '../utils/constant.js'
import { useSelector } from 'react-redux';


const useUpcomingMovies = () => {
    const dispatch = useDispatch()

    
    const UpcomingMovies =  useSelector(store => store.movies.UpcomingMovies)
    const getUpcomingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS)
      const json = await data.json();
      // console.log(json.results)
      dispatch(addUpcomingMovies(json.results))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
         !UpcomingMovies && getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;
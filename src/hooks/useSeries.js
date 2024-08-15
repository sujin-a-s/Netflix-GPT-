import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {addSeries} from "../utils/movieslice"
import { API_OPTIONS } from '../utils/constant.js'
import { useSelector } from 'react-redux';
 

const useSeries = () => {
    const dispatch = useDispatch()

    
    const Series =  useSelector(store => store.movies.Series)
    const getSeries = async () => {
      const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',API_OPTIONS)
      const json = await data.json();
      // console.log(json.results)
      dispatch(addSeries(json.results))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
         !Series && getSeries();
    },[])
}

export default useSeries;
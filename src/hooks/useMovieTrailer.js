import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieslice'
import { useEffect } from 'react'


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()

    
    const TrailerVideo = useSelector(store => store.movies.TrailerVideo)
    //ftech trailer video
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
         API_OPTIONS);
        const json = await data.json();
        // console.log(json);

        const filterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer))
        
    }

    useEffect(()=>{
         !TrailerVideo && getMovieVideos();
    },[])
}

export default useMovieTrailer;




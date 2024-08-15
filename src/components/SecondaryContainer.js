import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
        <div className='mt-0 md:mt-10 pl-0 relative z-20'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies.UpcomingMovies} />
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
          <MovieList title={"Series"} movies={movies.Series} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

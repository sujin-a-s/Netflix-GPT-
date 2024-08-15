import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        TrailerVideo : null,
        PopularMovies : null,
        TopRatedMovies : null,
        UpcomingMovies : null,
        Series : null
    },

    reducers : {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo : (state,action) => {
            state.TrailerVideo = action.payload
        },
        addPopularMovies : (state,action) => {
            state.PopularMovies = action.payload
        },
        addTopRatedMovies : (state,action) => {
            state.TopRatedMovies = action.payload
        },
        addUpcomingMovies : (state,action) => {
            state.UpcomingMovies = action.payload
        },
        addSeries : (state,action) => {
            state.Series= action.payload
        }
    }
    }
)

export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addSeries} = movieSlice.actions;
export default movieSlice.reducer; 
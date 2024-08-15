import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
    name: "gpt",
    initialState : {
        showGptSearch : false,
        movieNames : null,
        movieResults : null,
        clearCard : null

    },
    reducers : {
        toggleGptsearchView : (state) => {
        state.showGptSearch = !state.showGptSearch; 
        },
        addGptMovieResults : (state,action) => {
            const{movieNames,movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        clearCard : (state,action) => {
            state.movieNames = null
        }
    }

    
})

export const{toggleGptsearchView,addGptMovieResults,clearCard} = gptslice.actions;
export default gptslice.reducer;
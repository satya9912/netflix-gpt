import { createSlice } from "@reduxjs/toolkit";

export const gptSlice  = createSlice({
    name: 'gpt',
    initialState : {
        showGptSearch : false,
        gptMoviesResult: null,
        gptMoviesNames: null
    },
    reducers: {
        toggleShowGptSearch : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResults: (state, action) => {
            const {movieNames, moviesResult} = action.payload;
            state.gptMoviesNames = movieNames;
            state.gptMoviesResult = moviesResult;
        }
    }
});

export default gptSlice.reducer;
export const {toggleShowGptSearch,addGptMovieResults} = gptSlice.actions;
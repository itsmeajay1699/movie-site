import { createSlice } from "@reduxjs/toolkit";

export const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: {
    movieDetail: {},
    movieCredits: [],
  },
  reducers: {
    getMovieDetail: (state, action) => {
      state.movieDetail = action.payload;
    },
    getMovieCredits: (state, action) => {
      state.movieCredits = action.payload;
    },
  },
});

export const { getMovieDetail, getMovieCredits } = movieDetailSlice.actions;
export default movieDetailSlice.reducer;

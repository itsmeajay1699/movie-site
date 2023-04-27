import { createSlice } from "@reduxjs/toolkit";

export const trailerSlice = createSlice({
  name: "trailer",
  initialState: {
    trailerUrl: "movie",
    trailerId: "",
    resData: {},
  },
  reducers: {
    getTrailer: (state, action) => {
      state.trailerUrl = action.payload;
    },
    getTrailerData: (state, action) => {
      state.resData = action.payload;
    },
    getTrailerKey: (state, action) => {
      state.trailerId = action.payload;
    },
  },
});

export const {
  getTrailer,
  getTrailerData,
  getTrailerKey,
} = trailerSlice.actions;
export default trailerSlice.reducer;

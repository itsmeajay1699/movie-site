import { createSlice } from "@reduxjs/toolkit";

export const popularSlice = createSlice({
  name: "popular",
  initialState: {
    popularUrl: "movie",
    resPopularData: {},
  },
  reducers: {
    getPopular: (state, action) => {
      state.popularUrl = action.payload;
    },
    getPopularData: (state, action) => {
      state.resPopularData = action.payload;
    },
  },
});

export const { getPopular, getPopularData } = popularSlice.actions;

export default popularSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const trendingSlice = createSlice({
  name: "trending",
  initialState: {
    trendingUrl: "day",
    resData:{},
  },
  reducers: {
    getTrending: (state, action) => {
      state.trendingUrl = action.payload;
    },
    getData: (state, action) => {
      state.resData = action.payload;
    },
  },
});

export const { getTrending , getData } = trendingSlice.actions;
export default trendingSlice.reducer;

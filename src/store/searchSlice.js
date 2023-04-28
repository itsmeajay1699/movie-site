import { createSlice } from "@reduxjs/toolkit";

export const SearchSlice = createSlice({
  name: "search",
  initialState: {
    searchUrl: "",
    resSearchData: [],
  },
  reducers: {
    getSearchUrl: (state, action) => {
      state.searchUrl = action.payload;
    },
    getSearchData: (state, action) => {
      state.resSearchData = action.payload;
    },
  },
});

export const { getSearchUrl, getSearchData } = SearchSlice.actions;

export default SearchSlice.reducer;

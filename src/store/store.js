import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./homeSlice";
import trendingSlice from "./trendingSlice";
import popularSlice from "./popular";
import trailerSlice from "./trailerSlice";
import movieDetailSlice from "./movieDetailSlice";
import mediaSlice from "./mediaTypeSlice";
export const store = configureStore({
  reducer: {
    home: homeSlice,
    trending: trendingSlice,
    popular: popularSlice,
    trailer: trailerSlice,
    movieDetail: movieDetailSlice,
    media: mediaSlice,
  },
});

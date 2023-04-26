import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./homeSlice";
import trendingSlice from "./trendingSlice";
import popularSlice  from "./popular";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    trending: trendingSlice,
    popular: popularSlice,
  },
});

import { createSlice } from "@reduxjs/toolkit";

export const mediaSlice = createSlice({
  name: "media",
  initialState: {
    media: "poster",
    mediaData: {},
  },
  reducers: {
    setMedia: (state, action) => {
      state.media = action.payload;
    },
    setMediaData: (state, action) => {
      state.mediaData = action.payload;
    },
  },
});

export const { setMedia, setMediaData } = mediaSlice.actions;
export default mediaSlice.reducer;

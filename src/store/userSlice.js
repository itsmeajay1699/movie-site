import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    count: 3,
  },
  reducers: {
    // login
    login: (state, action) => {
      state.user = action.payload;
    },
    incCount: (state) => {
      state.count -= 1;
    },
    setCount: (state) => {
      state.count = 3;
    },
  },
});

export const { login, incCount, setCount } = userSlice.actions;
export default userSlice.reducer;

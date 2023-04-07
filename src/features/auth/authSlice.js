import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      return { ...state, ...action.payload };
    },
    userLoggedOut: (state) => {
      state.accessToken = null;
      state.user = null;
    },
    updateSelectedVideo: (state, action) => {
      state.user.selectedVideo = action.payload;
    },
  },
});

export const { userLoggedIn, userLoggedOut ,updateSelectedVideo} = authSlice.actions;
export default authSlice.reducer;

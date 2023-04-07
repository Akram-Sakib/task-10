import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaderBoard: [],
};

const leaderBoardSlice = createSlice({
  name: "leaderBoard",
  initialState,
  reducers: {
    leaderBoardLoaded: (state, action) => {
      state.leaderBoard = action.payload;
    },
  },
});

export const { leaderBoardLoaded } = leaderBoardSlice.actions;
export default leaderBoardSlice.reducer;

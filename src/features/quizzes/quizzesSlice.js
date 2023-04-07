import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: [],
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    quizzesLoaded: (state, action) => {
      state.quizzes = action.payload;
    },
  },
});

export const { quizzesLoaded } = quizzesSlice.actions;
export default quizzesSlice.reducer;

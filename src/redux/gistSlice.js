import { createSlice } from "@reduxjs/toolkit";

// Local storage varaibles
const allGist = JSON.parse(localStorage.getItem("gistList"));

// Initial State
const initialState = {
  gistList: allGist,
};

export const gistSlice = createSlice({
  name: "gist",
  initialState,
  // Gist Reducer
  reducers: {
    // Actions
    setGistList: (state, action) => {
      state.gistList = action.payload;
      // Store data in Local Storage to stop duplicate calls
      localStorage.setItem("gistList", JSON.stringify(action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGistList } = gistSlice.actions;

export default gistSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import gistReducer from "../redux/gistSlice";

export const store = configureStore({
  // All Reducers combine here
  reducer: {
    gist: gistReducer,
  },
});

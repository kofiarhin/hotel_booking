import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../features/Room/roomSlice";

export const store = configureStore({
  reducer: {
    room: roomReducer,
  },
});

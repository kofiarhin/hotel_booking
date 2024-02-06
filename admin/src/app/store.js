import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import roomReducer from "../features/Room/roomSlice";

export const store = configureStore({
  reducer: {
    room: roomReducer,
  },
});

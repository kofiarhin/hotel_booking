import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../features/Room/roomSlice";
import bookingReducer from "../features/booking/bookingSlice";

export const store = configureStore({
  reducer: {
    room: roomReducer,
    booking: bookingReducer,
  },
});

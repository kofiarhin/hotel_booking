import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../features/Room/roomSlice";
import bookingReducer from "../features/booking/bookingSlice";
import authReducer from "../features/auth/authSlice";
export const store = configureStore({
  reducer: {
    room: roomReducer,
    booking: bookingReducer,
    auth: authReducer,
  },
});

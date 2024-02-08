import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  booking: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// create booking
export const createBooking = createAsyncThunk(
  "booking/create",
  async (bookingData, thunkApi) => {
    try {
      const res = await fetch("/bookings", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(bookingData),
      });

      if (!res.ok) {
        const error = await res.json();
        return thunkApi.rejectWithValue(error);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.booking = action.payload;
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = bookingSlice.actions;

export default bookingSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],

  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const createRoom = createAsyncThunk(
  "room/create",
  async (roomData, thunkApi) => {
    try {
      const res = await fetch("/rooms", {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(roomData),
      });

      const data = await res.json();

      return data;

      if (!res.ok) {
        const error = await res.json();
        return thunkApi.rejectWithValue(data);
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// get rooms
export const getRooms = createAsyncThunk(
  "rooms/getAllRooms",
  async (_, thunkApi) => {
    try {
      const res = await fetch("/rooms");
      if (!res.ok) {
        const error = await res.json();
        return thunkApi.rejectWithValue(error);
      }

      const data = await res.json();

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms.push(action.payload);
      })
      .addCase(createRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getRooms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRooms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms = action.payload;
      })
      .addCase(getRooms.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = roomSlice.actions;
export default roomSlice.reducer;

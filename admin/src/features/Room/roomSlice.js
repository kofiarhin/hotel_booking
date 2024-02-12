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
      const res = await fetch("/api/rooms", {
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
      const res = await fetch("/api/rooms");
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

export const getRoom = createAsyncThunk(
  "room/getroom",
  async (roomId, thunkApi) => {
    try {
      const res = await fetch(`/api/rooms/${roomId}`);

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

// delete room
export const deleteRoom = createAsyncThunk(
  "room/delete",
  async (roomId, thunkApi) => {
    try {
      const res = await fetch(`/api//rooms/${roomId}`, {
        method: "DELETE",
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

// update room
export const updateRoom = createAsyncThunk(
  "room/update",
  async (roomData, thunkApi) => {
    const { roomId, ...rest } = roomData;

    console.log(roomId);
    try {
      const res = await fetch(`/rooms/${roomId}`, {
        headers: {
          "Content-Type": "application/json",
        },

        method: "PUT",
        body: JSON.stringify(rest),
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
      })
      .addCase(deleteRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms = state.rooms.filter(
          (room) => room._id !== action.payload.id.toString()
        );
      })
      .addCase(deleteRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // fix error in back end to return all rooms
        state.rooms = action.payload;
      })
      .addCase(updateRoom.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = roomSlice.actions;
export default roomSlice.reducer;

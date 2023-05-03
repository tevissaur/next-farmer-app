import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILocation {
  latitude: number;
  longitude: number;
}

interface UserState {
  location: ILocation;
}

const initialState = {
  location: {
    latitude: 42,
    longitude: -83,
  },
} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLocation: (state, action: PayloadAction<ILocation>) => {
      state.location = action.payload;
    },
  },
});

export const { setUserLocation } = userSlice.actions;

export default userSlice.reducer;

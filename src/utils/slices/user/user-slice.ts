import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILocation {
	lat: number;
	lng: number;
}

interface UserState {
	userData: {
		location: ILocation
	};
}

const initialState = {
	userData: {
		location: {
			lat: 0,
			lng: 0,
		}
	},
} as UserState;

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserLocation: (state, action: PayloadAction<ILocation>) => {
			state.userData.location = action.payload;
		}
	},
});

export const { setUserLocation } = userSlice.actions;

export default userSlice.reducer;

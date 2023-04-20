import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	farms: [],
	products: [],
	categories: [],
};

export const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setFarms: (state, action: PayloadAction<[]>) => {
			state.farms = action.payload;
		},
		setProducts: (state, action: PayloadAction<[]>) => {
			state.products = action.payload;
		},
		setCategories: (state, action: PayloadAction<[]>) => {
			state.categories = action.payload;
		},
		setSelectedCategories: (state, action: PayloadAction<[]>) => {
			state.categories = action.payload;
		},
	},
});

export const { setFarms, setProducts, setCategories } = searchSlice.actions;

export default searchSlice.reducer;

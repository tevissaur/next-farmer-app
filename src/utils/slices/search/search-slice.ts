import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  farms: [],
  products: [],
  categories: [],
  query: "",
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
    setQuery: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.query = action.payload;
    },
  },
});

export const { setFarms, setProducts, setCategories, setQuery } =
  searchSlice.actions;

export default searchSlice.reducer;

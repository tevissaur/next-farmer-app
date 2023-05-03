import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article, Farm, Product, User } from "@prisma/client";

export interface FarmState {
  farm: Farm;
  products: Product[];
  reviews: Article[];
  owner: User;
}

const initialState = {
  farm: {},
  reviews: [],
  products: [],
  owner: {}
};

export const farmSlice = createSlice({
  name: "farm-store",
  initialState,
  reducers: {
    setFarmData: (state, action: PayloadAction<Farm>) => {
      state.farm = action.payload;
    },
    resetFarmData: (state) => {
      state.farm = initialState.farm;
    },
  },
});

export const { setFarmData, resetFarmData } = farmSlice.actions;

export default farmSlice.reducer;

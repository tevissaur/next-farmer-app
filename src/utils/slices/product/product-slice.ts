import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Farm, Product } from "@prisma/client";

export interface ProductState {
	product: Product;
}

const initialState = {
	product: {}
};

export const productSlice = createSlice({
	name: "farm-store",
	initialState,
	reducers: {
		setProduct: ((state, action: PayloadAction<Product>) => {
			state.product = action.payload;
		}),
		resetProductData: ((state) => {
			state.product = initialState.product;
		}),
	},
});

export const { setProduct, resetProductData } = productSlice.actions;

export default productSlice.reducer;

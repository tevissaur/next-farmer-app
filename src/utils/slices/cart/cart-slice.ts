import {
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit";
import utilsService from "../../utils";
import { CartProduct } from "@prisma/client";


export interface CartState {
	products: CartProduct[];
	total: number;
}

const initialState = {
	products: [],
	total: 0,
} as CartState;

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<CartProduct>) => {
			state.products.push(action.payload);
			state.total = utilsService.calculateCartTotal(state.products);
		},
		removeProduct: (state, action: PayloadAction<CartProduct>) => {
			state.products.filter(
				(product) => product.productId !== action.payload.productId
			);
			state.total = utilsService.calculateCartTotal(state.products);
		},
		setCartData: (state, action: PayloadAction<{total: number, products: CartProduct[]}>) => {
			state.products = action.payload.products;
			state.total = action.payload.total;
		},
		// updateQuantityToAdd: (state, action: PayloadAction<any>) => {
		// 	const updatedProducts = state.products.map((product) => {
		// 		if (product.productId === action.payload.productId) {
		// 			return {
		// 				...product,
		// 				quantity: {
		// 					amount: action.payload.quantity,
		// 				},
		// 			};
		// 		} else return product;
		// 	});
		// 	state.products = updatedProducts;
		// },
	},
});

export const { addProduct, removeProduct, setCartData } =
	cartSlice.actions;

export default cartSlice.reducer;

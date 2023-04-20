import { createStore, combineReducers } from "redux";
// import { persistReducer } from 'redux-persist'
import cart from "./slices/cart/cart-slice";
import search from "./slices/search/search-slice";
import ui from "./slices/ui/ui-slice";
import user from "./slices/user/user-slice";
import farm from "./slices/farm/farm-slice";
import product from "./slices/product/product-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart,
    search,
    ui,
    user,
    farm,
    product,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

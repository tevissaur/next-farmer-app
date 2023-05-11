import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

interface UiState {
  activePage: string;
  returnUrl: string;
  profileDropdown: boolean;
  drawer: {
    open: boolean;
    body: ReactNode | null;
  };
  login: object;
  signup: object;
  openTab: number;
  review: object;
  editUser: object;
  editFarm: object;
  editProduct: object;
}

const initialState = {
  activePage: "",
  returnUrl: "",
  profileDropdown: false,
  drawer: {
    open: false,
    body: null,
  },
  login: {},
  signup: {},
  openTab: 0,
  review: {},
  editUser: {},
  editFarm: {},
  editProduct: {},
} as UiState;

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleProfileDropdown: (state) => {
      state.profileDropdown = !state.profileDropdown;
    },
    toggleDrawer: (state, action: PayloadAction<boolean>) => {
      state.drawer.open = action.payload;
    },
    setActivePage: (state, action: PayloadAction<string>) => {
      state.activePage = action.payload;
    },
    setOpenTab: (state, action: PayloadAction<number>) => {
      state.openTab = action.payload;
    },
    setLoginForm: (state, action: PayloadAction<object>) => {
      state.login = action.payload;
    },
    setSignupForm: (state, action: PayloadAction<object>) => {
      state.signup = action.payload;
    },
    setReviewForm: (state, action: PayloadAction<object>) => {
      state.review = action.payload;
    },
    setDrawerBody: (state, action: PayloadAction<ReactNode>) => {
      state.drawer.body = action.payload;
    },
  },
});

export const {
  toggleDrawer,
  toggleProfileDropdown,
  setActivePage,
  setOpenTab,
  setLoginForm,
  setSignupForm,
  setReviewForm,
  setDrawerBody,
} = uiSlice.actions;

export default uiSlice.reducer;

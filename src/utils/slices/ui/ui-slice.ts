import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  activePage: "",
  returnUrl: "",
  profileDropdown: false,
  drawer: {
    open: false,
  },
  login: {},
  signup: {},
  openTab: 0,
  review: {},
  editUser: {},
  editFarm: {},
  editProduct: {},
};

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
} = uiSlice.actions;

export default uiSlice.reducer;

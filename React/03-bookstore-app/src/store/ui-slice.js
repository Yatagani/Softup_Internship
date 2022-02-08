import { createSlice } from "@reduxjs/toolkit";

const defaultUiState = {
  cartIsVisible: false,
  wishlistIsVisible: false,
  newBookIsVisible: false,
  isLiked: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: defaultUiState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleWishlist(state) {
      state.wishlistIsVisible = !state.wishlistIsVisible;
    },
    toggleNewBook(state) {
      state.newBookIsVisible = !state.newBookIsVisible;
    },
    toggleLikeButton(state) {
      state.isLiked = !state.isLiked;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;

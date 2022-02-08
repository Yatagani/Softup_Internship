import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./wishlist-slice";
import bookSlice from "./book-slice";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    book: bookSlice.reducer,
    wishlist: wishlistSlice.reducer,
  },
});

export default store;

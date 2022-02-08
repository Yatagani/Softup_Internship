import { createSlice } from "@reduxjs/toolkit";

const defaultWishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: defaultWishlistState,
  reducers: {
    manageWishlistItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          author: newItem.author,
          image: newItem.image,
        });
      } else {
        const id = action.payload.id;
        state.items = state.items.filter((item) => item.id !== id);
        // Change like button of the book with the same id
        // state.isLiked = !state.isLiked;
      }
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;

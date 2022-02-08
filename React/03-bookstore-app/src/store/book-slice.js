import { createSlice } from "@reduxjs/toolkit";

const defaultBookState = {
  items: [],
  category: "English",
};

const bookSlice = createSlice({
  name: "book",
  initialState: defaultBookState,
  reducers: {
    filterCategory(state, action) {
      state.category = action.payload;
    },
    addNewBook(state, action) {
      const newItemKey = Object.keys(action.payload);
      const newItem = action.payload[newItemKey];
      state.items.push({
        id: newItem.id,
        title: newItem.title,
        price: newItem.price,
        category: newItem.category,
        image: newItem.image,
        author: newItem.author,
      });
    },
    fetchAllBooks(state, action) {
      state.items = Object.values(action.payload);
    },
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice;

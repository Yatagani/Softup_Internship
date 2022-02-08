import { createSlice } from "@reduxjs/toolkit";

const defaultCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalAmount += newItem.amount * newItem.price;
      state.totalQuantity += +newItem.amount;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          amount: newItem.amount,
        });
      } else {
        existingItem.amount += +newItem.amount;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalAmount -= existingItem.price;
      
      if (existingItem.amount === 1) {
        console.log("Ready to delete");
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.amount--;
      }
    },
    fetchAllCart(state, action) {
      state.items = Object.values(action.payload.items);
      state.totalAmount = action.payload.totalAmount;
      state.totalQuantity = action.payload.totalQuantity;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

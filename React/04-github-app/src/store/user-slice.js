import { createSlice } from "@reduxjs/toolkit";

const defaultUserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: defaultUserState,
  reducers: {
    fetchAll(state, action) {
      if (state.users.length === 1) {
        state.users = [];
      }
      state.users = [...state.users, ...action.payload];
    },
    fetchSingle(state, action) {
      if (state.users.length) {
        const userIndex = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        const updatedUser = Object.assign(
          {},
          state.users[userIndex],
          action.payload
        );
        state.users[userIndex] = updatedUser;
      } else {
        state.users[0] = action.payload;
      }
    },
    isLoading(state, action) {
      state.loading = action.payload;
    },
    hasError(state, action) {
      state.error = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;

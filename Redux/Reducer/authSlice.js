import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false, // Initial state
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSucces: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { loginSucces, logout } = authSlice.actions;
export default authSlice.reducer;

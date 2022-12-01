import { createSlice } from "@reduxjs/toolkit";
import {
  getSessionStorage,
  setSessionStorage,
} from "../../utils/browserStorage";

const initialState = {
  user: getSessionStorage("user") || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    setCredentials: (state, action) => {
      setSessionStorage("user", action.payload);
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = initialState;
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

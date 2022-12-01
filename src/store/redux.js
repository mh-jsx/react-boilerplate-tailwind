import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../pages/auth/authSlice";
import { apiSlice } from "../services/api/base";

export const store = configureStore({
  reducer: {
    authReducer,

    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../services/productsApi";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer, // RTK Query reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware), // RTK Query middleware
});

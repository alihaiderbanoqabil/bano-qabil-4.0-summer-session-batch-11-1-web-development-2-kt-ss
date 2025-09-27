import { configureStore } from "@reduxjs/toolkit";
import { apiSlice, reducer, middleware, reducerPath } from "./slices/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// export const store = configureStore({
//   reducer: {
//     [reducerPath]: reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(middleware),
// });

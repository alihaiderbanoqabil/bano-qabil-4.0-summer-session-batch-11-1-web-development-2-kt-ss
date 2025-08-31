import { configureStore } from "@reduxjs/toolkit";
import { cakeReducer } from "./features/cakeSlice";
import { userReducer } from "./features/userSlice";

export const store = configureStore({
  reducer: {
    // cake: require("./features/cakeSlice").cakeReduce,
    cake: cakeReducer,
    user: userReducer,
  },
});

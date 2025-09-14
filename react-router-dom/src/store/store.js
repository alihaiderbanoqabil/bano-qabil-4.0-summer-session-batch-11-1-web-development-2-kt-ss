import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/userSlice";
import { cakeReducer } from "./features/cakeSlice";

export const store = configureStore({
  reducer: {
    // cake: require("./features/cakeSlice").cakeReduce,
    cake: cakeReducer,
    user: userReducer,
  },
});

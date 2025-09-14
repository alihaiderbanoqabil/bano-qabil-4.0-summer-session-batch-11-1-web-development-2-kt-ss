import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 20,
};

const cakeSlice = createSlice({
  // initialState: {
  //   numOfCakes: 20,
  // },
  // OR
  initialState: initialState,
  name: "cake",
  reducers: {
    order1Cake: (state, action) => {
      console.log(state, "state from cakeSlice");
      console.log(action, "action from cakeSlice");

      state.numOfCakes--;
      // state.numOfCakes = state.numOfCakes - 1;
    },
    orderNCake: (state, action) => {
      console.log(state, "state from cakeSlice");
      console.log(action, "action from cakeSlice");
      state.numOfCakes = state.numOfCakes - action.payload;
      // state.numOfCakes -= action.payload;
    },
    restock1Cake: (state, action) => {
      state.numOfCakes++;
    },
    restockNCake: (state, action) => {
      state.numOfCakes = state.numOfCakes + action.payload;
    },
  },
});
export const cakeReducer = cakeSlice.reducer;
// export default cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;

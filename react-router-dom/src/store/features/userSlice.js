import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("fetch-users", (params) => {
  return axios("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      // const {data} = response;
      // console.log(response, "response");
      // console.log(response.data, "data");
      return response;
    })
    .catch((error) => {
      // console.log(error.message, "error.message");
      // console.log(error, "error");
      return error;
    });
});

const userSlice = createSlice({
  name: "user",
  initialState,
  // reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log(action, "action from userSlice fulfilled");
      // if (action.payload.status !== 200) {
      //   state.error = action?.payload?.message || "";
      //   state.users = [];
      //   return;
      // } 
      //  if (action.payload.status === 200) {
      //   state.users = action?.payload?.data || [];
      //   state.error = "";
      //   return;
      // }
      if (action.payload.status !== 200) {
        state.error = action?.payload?.message || "";
        state.users = [];
      } else if (action.payload.status === 200) {
        state.users = action?.payload?.data ?? [];
        state.error = "";
      }
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action, "action from userSlice rejected");

      state.error = action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;

// // const TOKEN = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

// export const fetchUsers = createAsyncThunk("user/fetchUsers", (query) => {
//   return axios(
//     query
//       ? `https://api.github.com/search/users?q=${query}&per_page=100`
//       : "https://api.github.com/users?since=0&per_page=100",
//     {
//       headers: {
//         Accept: "application/vnd.github+json",
//         // Authorization: `Bearer ${TOKEN}`,
//       },
//     }
//   )
//     .then(({ data }) => {
//       console.log(data);
//       return query ? [data?.items, data?.total_count] : [data, 0];
//     })
//     .catch((error) => error.message);
// });

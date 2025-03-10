import { toast } from "react-toastify";
import { login, register } from "./thunk";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  authAddSuccess: false,
  user: JSON.parse(sessionStorage.getItem("user")) || {},
};

export const setupLogin = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    return login(data, thunkAPI);
  }
);

export const setupRegister = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    return register(data, thunkAPI);
  }
);

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthAddSuccess: (state) => {
      state.authAddSuccess = false;
    },
    handleResetUser: (state) => {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    // Handle Login
    builder
      .addCase(setupLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.authAddSuccess = true;
        sessionStorage.setItem("nino", payload?.user?.nino);
        sessionStorage.setItem("user", JSON.stringify(payload?.user));
        state.user = payload?.user;
      })
      .addCase(setupLogin.rejected, (state) => {
        state.loading = false;
        toast.error("An error has occurred. Please try again later.");
      });
    // Handle Register
    builder
      .addCase(setupRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupRegister.fulfilled, (state) => {
        state.loading = false;
        state.authAddSuccess = true;
      })
      .addCase(setupRegister.rejected, (state) => {
        state.loading = false;
        toast.error("An error has occurred. Please try again later.");
      });
  },
});

export const { resetAuthAddSuccess ,handleResetUser} = slice.actions;

export default slice.reducer;

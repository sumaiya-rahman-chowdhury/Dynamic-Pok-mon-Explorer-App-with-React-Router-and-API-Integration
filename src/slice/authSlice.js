import { createSlice } from "@reduxjs/toolkit";
import { use } from "react";
// import { auth } from "../firebaseConfig";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: true,
  },
  reducers: {
    logedIn: (state, action) => {
      //   console.log("firstname");
      // debugger;
      console.log(action.payload);
      const { uid, displayName, email } = action.payload.user;
      state.user = { uid, displayName, email };
      state.loading = false;
      console.log(state.user);
      //   state.auth = { accessToken, displayName, email };
      //   localStorage.setItem("auth", JSON.stringify(state.auth));
    },
    logedOut: (state) => {
      state.user = null;
      //   localStorage.removeItem("auth");
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export default authSlice.reducer;
export const { logedIn, logedOut, setLoading } = authSlice.actions;

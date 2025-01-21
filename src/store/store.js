import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../slice/slice";
// import { auth } from "../firebaseConfig";
import authReducer from "../slice/authSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    auth:authReducer
  },
});

export default store;

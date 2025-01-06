import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../slice/slice"
import { data } from "react-router";

const store = configureStore ({
    reducer:{
        data:dataReducer
    }
})

export default store ;
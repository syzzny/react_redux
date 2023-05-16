
import memoSlice from "./slices/memoSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer : {
        memo : memoSlice
    }
})
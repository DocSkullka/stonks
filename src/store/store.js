import { configureStore } from "@reduxjs/toolkit";
import stockSlice from "./Slice/stockSlice";


export  const store = configureStore({
    reducer: {
        user: stockSlice,
    }
})
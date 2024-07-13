import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../reducer/authSlice";


export const store: any = configureStore({
    reducer: {
        auth: authReducer
    }
})
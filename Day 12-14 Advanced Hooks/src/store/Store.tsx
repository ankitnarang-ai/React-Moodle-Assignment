import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../reducer/itemSlice";
import authReducer from "../reducer/authSlice";
import cartReducer from "../reducer/cartSlice";

export const store: any = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        item: itemReducer
    }
});
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    cart: [],
    count: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];;
            state.count += 1;
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
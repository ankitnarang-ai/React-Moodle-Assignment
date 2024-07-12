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
            state.cart.push(action.payload);
            state.count += 1;
        },
        removeFromCart: (state, action) => {
            const { name } = action.payload; 
            state.cart = state.cart.filter((item: any) => item.name !== name);
            state.count -= 1;
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

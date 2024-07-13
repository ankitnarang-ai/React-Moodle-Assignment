import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    cartItems: [],
};

const cartSlice = createSlice({ 
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload; 
            state.cartItems = state.cartItems.filter((item: any) => item.id !== id);
        },
    }, 
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
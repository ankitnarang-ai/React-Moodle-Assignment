import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    items: [],
};

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.items = [...action.payload];
        },
        removeItems: (state, action) => {
            state.items = state.items.filter((item: any) => item.name !== action.payload);
        }
    },
});

export const { addItems, removeItems } = itemSlice.actions;
export default itemSlice.reducer;
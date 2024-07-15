import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    items: [],
    itemsSearch: [],
};

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.items = [...action.payload];
        },
        duplicatItems: (state, action) => {
            state.itemsSearch = [...action.payload];
        },
        removeItems: (state, action) => {
            state.items = state.items.filter((item: any) => item.name !== action.payload);
        }
    },
});

export const { addItems, removeItems, duplicatItems } = itemSlice.actions;
export default itemSlice.reducer;
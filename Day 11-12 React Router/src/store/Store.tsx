import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../reducer/loginSlice';
import cartReducer from  '../reducer/cartSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

export default store;


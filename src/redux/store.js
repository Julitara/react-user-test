import { configureStore } from '@reduxjs/toolkit';
import product from './slice/productSlice';
import user from './slice/userSlice';


export const store = configureStore({
  reducer: {
    product,
    user,
  },
})
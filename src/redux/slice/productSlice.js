import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk('product/fetchProductStatus', async () => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
  return data;
});

const initialState = {
  items: [],
  status: 'loading', //loading, success, error
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchProduct.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchProduct.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const selectProduct = (state) => state.product;

export const { setItems } = productSlice.actions;

export default productSlice.reducer;

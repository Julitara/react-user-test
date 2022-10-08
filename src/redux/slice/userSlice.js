import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    removeUser(state) {
      state.username = '';
      state.password = '';
    },
  },
});

export const selectUser = (state) => state.user;

export const { setUserAuth, setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

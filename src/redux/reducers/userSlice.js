import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', email: '', sales: 0, region: '' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

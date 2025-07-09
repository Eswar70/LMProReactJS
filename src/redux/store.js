import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/dataSlice';
import userReducer from './reducers/userSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    user: userReducer,
  },
});

export default store;

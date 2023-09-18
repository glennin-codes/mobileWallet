
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Reducer/authSlice'
import userReducer from '../Reducer/userSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user:userReducer
   
  },
});

export default store;

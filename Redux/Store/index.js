
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Reducer/authSlice'
import userReducer from '../Reducer/userSlice';
import depositReducer from '../Reducer/depositSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user:userReducer,
    deposit:depositReducer
   
  },
});

export default store;

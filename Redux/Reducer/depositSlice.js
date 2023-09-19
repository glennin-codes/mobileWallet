import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeDeposit } from "../api";
import { decodeToken } from "../../utils/DecodeToken/decodeToken";
// Deposit
export const deposit = createAsyncThunk("user/deposit", async ({ userId, amount }) => {
    try {
      const token = localStorage.getItem("token");
  
      if (!token) {
        throw new Error("Token not found");
      }
  
      // Decode the token to get the user ID
      const decodedData = decodeToken(token);
      console.log(decodedData);
      const userId = decodedData.userId;
      const phone = decodedData.phone;
  
      const response = await makeDeposit(userId, amount, phone);
      console.log("response", response);
  
        return response;
  
    } catch (error) {
      throw error;
    }
  });
  

const depositSlice = createSlice({
    name: 'deposit',
    initialState: {
      depositLoading: false,
      depositSuccess: false,
      depositError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(deposit.pending, (state) => {
          state.depositLoading = true;
          state.depositSuccess = false;
          state.depositError = null;
        })
        .addCase(deposit.fulfilled, (state) => {
          state.depositLoading = false;
          state.depositSuccess = true;
          state.depositError = null;
        })
        .addCase(deposit.rejected, (state, action) => {
          state.depositLoading = false;
          state.depositSuccess = false;
          state.depositError = action.error.message;
        });
    },
  });
  export default depositSlice.reducer
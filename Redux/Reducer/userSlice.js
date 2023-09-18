import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserData, makeDeposit, makeWithdrawal } from "../api";
import { decodeToken } from "../../utils/DecodeToken/decodeToken";
import { pollForCallbackData } from "../utils/poolCallBackData";

// Initial state
const initialState = {
  user: null,
  balance: 0,
  isLoading: false,
  depositLoading: false,
  withdrawalLoading: false,
  depositSuccess: false,
  withdrawalSuccess: false,
  error: null,
};

// Fetch initial user data
const fetchUserData = createAsyncThunk("user/fetchUserData", async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token not found");
    }

    // Decode the token to get the user ID
    const decodedData = decodeToken(token);
    const userId = decodedData.userId;

    const response = await getUserData(userId);

    return response;
  } catch (error) {
    throw error;
  }
});


// Deposit
const deposit = createAsyncThunk("user/deposit", async ({ userId, amount }) => {
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
    console.log("response",response)
    const data=  pollForCallbackData();
    console.log("calBackData",data);
    // const updatedUserData = await getUserData(userId);

   ;
  } catch (error) {
    throw error;
  }
});

// Withdraw
const withdraw = createAsyncThunk(
  "user/withdraw",
  async ({ userId, amount }) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token not found");
      }

      // Decode the token to get the user ID
      const decodedData = decodeToken(token);
      const userId = decodedData.userId;
      const phone = decodedData.phone;

      const response = await makeWithdrawal(userId, amount, phone);
      const updatedUserData = await getUserData(userId);

      return updatedUserData.data;
    } catch (error) {
      throw error;
    }
  }
);

// User slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.balance = action.payload.amount;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deposit.pending, (state) => {
        state.depositLoading = true;
      })
      .addCase(deposit.fulfilled, (state, action) => {
        // state.balance = action.payload.amount;
        state.depositSuccess = true;
        state.depositLoading = false; // Update the loading state
      })
      .addCase(deposit.rejected, (state, action) => {
        state.error = action.error.message;
        state.depositLoading = false; // Update the loading state
      })
      .addCase(withdraw.pending, (state) => {
        state.withdrawalLoading = true;
      })
      .addCase(withdraw.fulfilled, (state, action) => {
        state.withdrawalSuccess = true;
        // state.balance = action.payload.amount;
        state.withdrawalLoading = false; // Update the loading state
      })
      .addCase(withdraw.rejected, (state, action) => {
        state.error = action.error.message;
        state.withdrawalLoading = false; // Update the loading state
      });
  },
});

export default userSlice.reducer;

export { fetchUserData, deposit, withdraw };

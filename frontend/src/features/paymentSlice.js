import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk for processing payment
export const processPayment = createAsyncThunk(
  "payment/processPayment",
  async (paymentData, { rejectWithValue }) => {
    try {
      // Example: Send payment data to your server's payment endpoint
      const response = await axios.post("/api/payment", paymentData);

      if (response.status === 200) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    status: "idle", // 'idle' | 'pending' | 'success' | 'error'
    error: null,
    paymentData: null,
  },
  reducers: {
    // You can add any synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(processPayment.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(processPayment.fulfilled, (state, action) => {
        state.status = "success";
        state.paymentData = action.payload;
      })
      .addCase(processPayment.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload || "Payment failed";
      });
  },
});

export default paymentSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";

export const fetchCaregivers = createAsyncThunk(
  "caregivers/fetchCaregivers",
  async (searchTerm = "", { rejectWithValue }) => {
    try {
      console.log("Search term:", searchTerm); // Debugging
      const response = await axios.get(
        `${url}api/caregivers?search=${encodeURIComponent(searchTerm)}`,
        setHeaders()
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const caregiverSlice = createSlice({
  name: "caregivers",
  initialState: {
    list: [],
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCaregivers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCaregivers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchCaregivers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default caregiverSlice.reducer;

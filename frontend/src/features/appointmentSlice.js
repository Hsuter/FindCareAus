// features/appointmentSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

export const bookAppointment = createAsyncThunk(
  "appointments/bookAppointment",
  async (appointmentData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${url}api/appointments/book`,
        appointmentData // Include userId in the payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchAppointments = createAsyncThunk(
  "appointments/fetchAppointments",
  async (_, { getState, rejectWithValue }) => {
    console.log("fetchAppointments dispatched");
    try {
      const { auth } = getState();
      const userId = auth._id;

      const response = await axios.get(
        `${url}api/appointments?userId=${userId}`
      );
      return response.data;
    } catch (error) {
      console.error("Fetch Appointments Error:", error.response || error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch appointments"
      );
    }
  }
);

export const cancelAppointment = createAsyncThunk(
  "appointments/cancelAppointment",
  async (appointmentId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${url}api/appointments/${appointmentId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data || "Failed to cancel appointment"
      );
    }
  }
);

const appointmentSlice = createSlice({
  name: "appointments",
  initialState: {
    appointments: [],
    status: "idle",
    error: null,
  },
  reducers: {
    hydrate(state, action) {
      state.appointments = action.payload;
      state.status = "succeeded";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.appointments = action.payload;
        localStorage.setItem("appointments", JSON.stringify(action.payload));
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch appointments";
      })
      .addCase(cancelAppointment.fulfilled, (state, action) => {
        toast.error("Appointment cancelled!");
        state.appointments = state.appointments.filter(
          (appointment) => appointment._id !== action.payload._id
        );
      })
      .addCase(cancelAppointment.rejected, (state, action) => {
        state.error = action.payload || "Failed to cancel appointment";
      });
  },
});

export const { hydrate } = appointmentSlice.actions;
export default appointmentSlice.reducer;

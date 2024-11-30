import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import appointmentReducer from "../features/appointmentSlice";
import { loadUser, getUser } from "../features/authSlice";
import caregiverReducer from "../features/caregiverSlice";
import appoinmentReducer from "../features/appointmentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    appointments: appointmentReducer,
    caregivers: caregiverReducer,
    appoinments: appoinmentReducer,
  },
});

store.dispatch(loadUser(null));

export default store;

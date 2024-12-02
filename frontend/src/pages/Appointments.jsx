import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAppointments,
  cancelAppointment,
} from "../features/appointmentSlice";

const Appointments = () => {
  const dispatch = useDispatch();
  const { appointments, status, error } = useSelector(
    (state) => state.appointments
  );
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.token) {
      dispatch(fetchAppointments());
    }
  }, [dispatch, auth.token]);

  const handleCancel = (appointmentId) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      dispatch(cancelAppointment(appointmentId));
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment._id} className="border p-4 mb-2 rounded">
              <p>
                <strong>Date:</strong>{" "}
                {new Date(appointment.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Time:</strong> {appointment.time}
              </p>
              <p>
                <strong>Caregiver:</strong> {appointment.caregiverName}
              </p>
              <p>
                <strong>Contact:</strong> {appointment.caregiverContact}
              </p>
              <p>
                <strong>Address:</strong> {appointment.caregiverAddress}
              </p>
              <p>
                <strong>Status:</strong> {appointment.status}
              </p>
              <button
                onClick={() => handleCancel(appointment._id)}
                className="mt-2 px-4 py-2 bg-darkgreen text-white rounded hover:bg-red-600"
              >
                Cancel Appointment
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Appointments;

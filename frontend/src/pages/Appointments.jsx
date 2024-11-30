import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppointments } from "../features/appointmentSlice";

const Appointments = () => {
  const dispatch = useDispatch();
  const { appointments, status, error } = useSelector(
    (state) => state.appointments
  );
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("Running useEffect with auth.token:", auth.token);
    if (auth.token) {
      localStorage.removeItem("appointments");
      const storedAppointments = JSON.parse(
        localStorage.getItem("appointments")
      );
      if (storedAppointments) {
        dispatch({ type: "appointments/hydrate", payload: storedAppointments });
      } else {
        console.log("Dispatching fetchAppointments...");
        dispatch(fetchAppointments());
      }
    }
  }, [dispatch, auth.token]);

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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Appointments;

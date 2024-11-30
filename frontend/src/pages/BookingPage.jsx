import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h2>Select a Date and Time for Booking</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="yyyy/MM/dd h:mm aa" // Customize the date and time format
        timeIntervals={15} // Set time intervals for minutes
        placeholderText="Select a date and time"
      />
      {/* Additional components can be added for further customization */}
    </div>
  );
};
export default Booking;

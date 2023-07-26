import React, { useState } from "react";

const facilities = {
  Clubhouse: {
    slots: {
      "10am-4pm": 100,
      "4pm-10pm": 500,
    },
  },
  "Tennis Court": {
    slots: {
      anytime: 50,
    },
  },
};

const BookingModule = () => {
  const [facility, setFacility] = useState("Clubhouse");
  const [dateRange, setDateRange] = useState("");
  const [bookingResult, setBookingResult] = useState("");

  const bookFacility = () => {
    const [facilityName, dateRangeStr] = dateRange.split(",");
    const facilityToBook = facilityName.trim();
    const dateRangeFormatted = dateRangeStr.trim();

    if (!facilityToBook || !dateRangeFormatted) {
      setBookingResult("Invalid input");
      return;
    }

    if (!facilities[facilityToBook]) {
      setBookingResult("Facility not found");
      return;
    }

    const bookingInfo = checkAvailability(facilityToBook, dateRangeFormatted);
    setBookingResult(bookingInfo);
  };

  const checkAvailability = (facility, dateRange) => {
    const [start, end] = dateRange.split("-");
    const startTime = new Date(start.trim());
    const endTime = new Date(end.trim());

    if (isNaN(startTime) || isNaN(endTime)) {
      return "Invalid date/time format";
    }

    const facilityInfo = facilities[facility];
    for (const slot in facilityInfo["slots"]) {
      const [slotStart, slotEnd] = slot.split("-");
      const slotStartTime = new Date(startTime);
      slotStartTime.setHours(
        parseInt(slotStart.split(":")[0]),
        parseInt(slotStart.split(":")[1])
      );
      const slotEndTime = new Date(startTime);
      slotEndTime.setHours(
        parseInt(slotEnd.split(":")[0]),
        parseInt(slotEnd.split(":")[1])
      );

      if (slotStartTime <= startTime && slotEndTime >= endTime) {
        if (facilityInfo["bookings"] && facilityInfo["bookings"][slot]) {
          return "Booking Failed, Already Booked";
        }
        facilityInfo["bookings"] = {
          ...facilityInfo["bookings"],
          [slot]: facilityInfo["slots"][slot],
        };
        return (
          "Booked, Rs. " +
          (facilityInfo["slots"][slot] * (endTime - startTime)) / 3600000
        );
      }
    }

    return "Booking Failed, Invalid time slot";
  };

  return (
    <div>
      <h1>Facility/Common Amenities Booking Module</h1>
      <div>
        <label>Select Facility:</label>
        <select value={facility} onChange={(e) => setFacility(e.target.value)}>
          {Object.keys(facilities).map((facilityName) => (
            <option key={facilityName} value={facilityName}>
              {facilityName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Enter Date Range:</label>
        <input
          type="text"
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
        />
      </div>
      <button onClick={bookFacility}>Book Facility</button>
      <div>{bookingResult}</div>
    </div>
  );
};

export default BookingModule;

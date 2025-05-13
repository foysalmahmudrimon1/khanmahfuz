import React from "react";
import SingleBooking from "./SingleBooking";

const MyBooking = ({ booking, cancelBooking }) => {
  return (
    <section>
      <div className="my-container bg-orange-50">
        <div className="my-bookings-info mt-25 mb-8">
          <h1 className="text-dark font-black text-3xl md:text-4xl text-center">
            My Today Appointments
          </h1>
          <p className=" text-center mt-4 max-w-[1000px] mx-auto">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
        </div>
        <div>
          {booking.map((lawyer) => (
            <SingleBooking
              key={lawyer.id}
              lawyer={lawyer}
              cancelBooking={cancelBooking}
            ></SingleBooking>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyBooking;

import React from "react";
import { Link, NavLink } from 'react-router';

const NoBooking = () => {
  return (
    <section className="my-bookings py-20">
      <div className="my-container">
        <div className="bg-orange-50 w-full rounded-2xl text-black py-16 px-5 text-center">
          <h2 className="text-3xl text-black font-bold mb-2">
            You have not booked any appointment yet
          </h2>
          <p className="text-lg mb-6">Please book an appointment</p>
         <Link
            className="px-8 py-3 font-bold text-xl rounded-full bg-green-500 text-white outline-0 border-0 hover:bg-green-600 transition ease-in-out duration-300"
            to={"/"}
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoBooking;

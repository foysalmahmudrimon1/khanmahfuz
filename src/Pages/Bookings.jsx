import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getDataFromDB } from "../Utility/Utility";
import NoBooking from "../Components/NoBooking";
import MyBooking from "../Components/MyBooking";

const Bookings = () => {
  const [booking, setBooking] = useState([]);
  const lawyers = useLoaderData();

  useEffect(() => {
    const dataFromStorage = getDataFromDB();
    const convertedListData = dataFromStorage.map((id) => parseInt(id));

    const filteredLawyers = lawyers.filter((lawyer) => {
      return convertedListData.includes(lawyer.id);
    });
    setBooking(filteredLawyers);
  }, []);

  const cancelBooking = (id) => {
    const filteredBooking = booking.filter((lawyer) => lawyer.id !== id);
    setBooking(filteredBooking);

    const dataFromStorage = getDataFromDB();
    const convertedListData = dataFromStorage.map((id) => parseInt(id));
    const filteredNewBooking = convertedListData.filter(
      (databasesId) => databasesId !== id
    );
    const jsonData = JSON.stringify(filteredNewBooking);
    localStorage.setItem("lawyer", jsonData);
  };

  return (
    <>
     {
        booking.length > 0 ? <MyBooking booking={booking} cancelBooking={cancelBooking}></MyBooking> : <NoBooking></NoBooking>
     }
    </>

  );
};

export default Bookings;

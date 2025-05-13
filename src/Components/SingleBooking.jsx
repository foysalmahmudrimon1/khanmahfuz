import React from 'react';
import { toast, Zoom } from 'react-toastify';


const SingleBooking = ({lawyer,cancelBooking}) => {


    return (
        <div className="bg-orange-50 w-full rounded-2xl text-black p-8 mb-5">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between mb-4 ">
          <div>
            <h4 className="text-xl text-black font-bold mb-2">
              {lawyer.name}
            </h4>
            <p className="text-sm ">
              {" "}
              {lawyer.education.field} - {lawyer.education.institution}
            </p>
          </div>
          <p className="text-lg text-gray-500 font-medium">
            Appointment Fee : <span>{lawyer.fee} </span> +Vat
          </p>
        </div>
        <div className="text-center mt-12 border-t border-gray-400 border-dashed ">
          <button
          onClick={()=>{
            cancelBooking(lawyer.id)

            toast.error(`You have cancelled appointment with ${lawyer.name}`, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Zoom,
              });
          }}
          
          className="w-full inline-block py-3 px-8 text-lg md:text-xl font-bold text-center mt-5 border bg-transparent text-red-500 rounded-full transition ease-in-out duration-300 hover:text-white hover:bg-red-500">
            Cancel Appointment
          </button>
        </div>
      </div>
    );
};

export default SingleBooking;
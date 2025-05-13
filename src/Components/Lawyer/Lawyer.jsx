import React from 'react';
import { Link } from 'react-router';

const Lawyer = ( {lawyer}) => {

    const {id, name, image, education,experience,speciality,registration}= lawyer;
    return (
        <div className="lawyer-card p-8 rounded-2xl bg-white flex flex-col justify-between text-center md:text-start">
        <div className="img-box rounded-xl overflow-hidden h-[350px] md:h-[250px]">
          <img
            className="size-full object-cover"
            alt="Dr. Sarah Mitchell Doctor"
            src={image}
          />
        </div>
        <div className="content-box mt-4">
          <div className="meta flex gap-2 text-sm font-medium justify-center md:justify-start flex-wrap">
            <span className="px-4 py-2 rounded-full bg-[#09982F10] border border-[#09982F20] text-green">
              Available
            </span>
            <span className="px-4 py-2 rounded-full bg-[#176AE510] border border-[#176AE520] text-blue">
             {experience} Years Experience
            </span>
          </div>
          <h2 className="text-2xl text-dark font-black mt-4 mb-3">
           {name}
          </h2>
          <p className="text-lg font-medium">
           {education.field} - {education.institution}
          </p>
          <p className="text-lg font-semibold mt-2 text-gray-700">
            Speciality : {speciality}
          </p>
          <div className="border-t border-dashed border-gray-300 my-4"></div>
          <p className="text-lg font-medium flex gap-2 items-center justify-center md:justify-start">
            {registration}
          </p>
        </div>
        <Link to={`lawyer/${id}`}
          className="mt-5 block p-3 text-lg md:text-xl font-bold text-center transition ease-in-out duration-300 border bg-transparent text-green-500 hover:text-white hover:bg-green-500 w-full rounded-full"
        >
          View Details
        </Link>
      </div>
    );
};

export default Lawyer;
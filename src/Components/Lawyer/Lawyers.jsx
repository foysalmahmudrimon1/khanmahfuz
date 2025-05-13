import React, { useEffect, useState } from "react";
import Lawyer from "./Lawyer";

const Lawyers = ({ lawyersData }) => {
  const [shawAll, setShowAll] = useState(false);
  const [allLawyers, setAllLawyers] = useState([]);

  useEffect(() => {
    shawAll
      ? setAllLawyers(lawyersData)
      : setAllLawyers(lawyersData.slice(0, 6));
  }, [shawAll, lawyersData]);

  return (
    <section className="lawyers py-20 bg-orange-50 mt-25">
      <div className="my-container">
        <h2 className="text-dark font-black text-3xl md:text-4xl text-center">
          Our Best Lawyers
        </h2>
        <p className=" text-center mt-4 mb-8 max-w-[1000px] mx-auto">
          Our platform connects you with verified, experienced lawyers across
          various specialties — all at your convenience. Whether you need legal
          advice, document preparation, or courtroom representation, book
          appointments in minutes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allLawyers.map((lawyer) => (
            <Lawyer key={lawyer.id} lawyer={lawyer} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => {
              setShowAll((prev) => !prev);
              window.scrollTo({
                left: 0,
                top: 200,
                behavior: "smooth",
              });
            }}
            className=" inline-block py-3 px-8 text-xl font-bold text-center  border  text-white bg-green-500 rounded-full transition ease-in-out duration-300 hover:bg-transparent hover:text-green-500"
          >
            {shawAll ? "Show Less" : "Show All Lawyers"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Lawyers;

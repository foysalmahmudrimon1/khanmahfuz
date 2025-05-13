import React from "react";

const Banner = () => {
  return (
    <section className="py-15 bg-white">
      <section className="-mt-18 mb-5 text-center ">
        {" "}
        <marquee
          className="text-orange-800 mt-3  "
          width="50%"
          behavior="scrolling"
          direction=""
        >
          M. Khan & Associates Tax & Company Law specialists New set up, Long
          vision Seeking prayers to well wishers adress; House # 130, Road # 05
          Mohammadi Housing society Mohammadpur ( near shia mosjid)
        </marquee>
      </section>

      <div className="my-container -mt-5 " >
        <div className={`py-40 px-5 bannerBg rounded-2xl`}>
          <div className=" max-w-[960px] mx-auto text-center ">
            
            <h1 className=" text-4xl font-black text-white mb-30 leading-20 ">
           বিশ্বস্ত আইন সহায়তা <br />
    আপনার ন্যায়বিচার আমাদের অঙ্গীকার
            </h1>
            <p className="text-base relative  text-gray-300 font-medium">
              Our platform connects you with verified, experienced advocates
              across various specialties — all at your convenience. Whether you need legal advice, document preparation, or courtroom representation, book appointments in
              minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";

const Footer = () => {
  return (
    <footer className="my-footer py-24 bg-gray-800 text-white">
      <div className="my-container">
        <div className="flex flex-col items-center gap-8 ">
          <a className="flex items-center gap-2" href="/" data-discover="true">
            <img
              className="size-10  md:size-12"
              alt="Logo"
              src="/public/logo.png"
            />
            <h3 className="text-3xl font-black text-green-500 ">
              M.Khan <span className="text-white">& Associates</span>
            </h3>
          </a>
          <nav>
            <ul className="flex gap-8 items-center flex-wrap justify-center">
              <li>
                <a
                  aria-current="page"
                  className="navbtn text-lg font-medium inline-block px-4 py-2 text-gray-50 hover:text-green-500 transition ease-in-out duration-300 active"
                  href="/"
                  data-discover="true"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="navbtn text-lg font-medium inline-block px-4 py-2 text-gray-50 hover:text-green-500 transition ease-in-out duration-300"
                  href="/my-bookings"
                  data-discover="true"
                >
                  My-Bookings
                </a>
              </li>
              <li>
                <a
                  className="navbtn text-lg font-medium inline-block px-4 py-2 text-gray-50 hover:text-green-500 transition ease-in-out duration-300"
                  href="/blogs"
                  data-discover="true"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  className="navbtn text-lg font-medium inline-block px-4 py-2 text-gray-50 hover:text-green-500 transition ease-in-out duration-300"
                  href="/contact"
                  data-discover="true"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="border-t border-[#0F0F0F20] max-w-[1060px] mx-auto my-8"></div>
        <div className="buttons flex gap-6 items-center justify-center">
          <a href="https://www.facebook.com/" target="_blank">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="size-9 text-green-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
            </svg>
          </a>
          <a
            className="size-9 bg-gray-800 rounded-full text-white flex-center"
            href="https://x.com/"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
            </svg>
          </a>
          <a
            className="size-9 bg-[#0575B3] rounded-full text-white flex-center"
            href="https://linkedin.com/"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.2"
              baseProfile="tiny"
              viewBox="0 0 24 24"
              className="text-3xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 19h-3v-10h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165v6.262h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03v5.647z"></path>
              <ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5"></ellipse>
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="size-9 text-[#ff0000]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

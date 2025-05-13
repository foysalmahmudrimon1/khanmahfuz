import React from "react";
import Navbar from "../Components/header/Navbar";

const Error = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="py-24">
        <div className="my-container">
          <div className="error-page text-center">
            <div className="img-box max-w-[600px] mx-auto rounded-2xl mb-5 overflow-hidden p-10 bg-white">
              <img className="max-w-full" alt="image" src={'https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk='}/>
            </div>
            <h1 className="text-red-400 text-4xl mt-10">Page Not Found</h1>
            <p className="mt-3 mb-10 text-lg text-black">
              Sorry, the page you are looking for does not exist.
            </p>
            <a
              className="px-8 py-3 font-bold text-xl rounded-full bg-green-500 text-white outline-0 border-0 hover:bg-green-600 transition ease-in-out duration-300"
              href="/"
              data-discover="true"
            >
              Go Home 
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Error;

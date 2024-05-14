// import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-red-700 py-20">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-start">
        <div className="text-start">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            NoteApp: Your Simple Yet Powerful Note-Taking Solution
          </h1>
          <p className="my-4 text-xl text-white">
            The versatile note-taking app designed to simplify your life while
            enhancing your productivity.
          </p>
        </div>
        <div className="mt-10">
          <Link
            to="/add-notes"
            className="h-[36px] bg-black text-white hover:bg-gray-900 hover:text-white px-10 py-4 rounded-xl text-center text-sm"
          >
            Add notes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

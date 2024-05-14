/* eslint-disable react/prop-types */
// import React from "react";
// import { Link } from "react-router-dom";
import Note from "./Note";
const Notes = ({ isHomePage = false }) => {
  return (
    <>
      <div
        className={
          isHomePage
            ? "bg-red-50 px-4 py-12 rounded-xl"
            : "bg-red-50 px-4 py-12 rounded-xl min-h-screen"
        }
      >
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-red-500 mb-6 text-start">
            {isHomePage ? "Your Recent Notes:" : "Your Notes:"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Note />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;

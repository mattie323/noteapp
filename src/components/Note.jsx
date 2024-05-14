// import React from "react";
import { Link } from "react-router-dom";
const Note = () => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">Note Category</div>
          <h3 className="text-xl font-bold">Note Title</h3>
        </div>

        <div className="mb-5">Description</div>
        {/* <button
          onClick={() =>
            setShowFullDescription((previousState) => !previousState)
          }
          className="text-indigo-500 mb-5"
        >
          {showFullDescription ? "Less" : "More"}
        </button> */}
        <h3 className="text-red-500 mb-2">Date</h3>

        <div className="border border-red-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-end mb-4">
          <Link
            to="/notes"
            className="h-[36px] bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Note;

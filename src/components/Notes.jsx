/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import Note from "./Note";

const Notes = ({ isHomePage = false }) => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      const apiUrl = isHomePage ? "/api/notes?_limit=3" : "/api/notes";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setNotes(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchNotes();
  }, []);
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
            {isHomePage ? "Your Previous Notes:" : "Your Notes:"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notes.map((note) => (
              <Note key={note.id} notes={note} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;

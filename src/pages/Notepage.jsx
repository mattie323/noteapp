import React, { useContext } from "react";
import { useParams, useLoaderData, useNavigate, NavLink, Link} from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { NotesContext } from "../contexts/NoteContext";

const Notepage = () => {
  const { id } = useParams();
  const note = useLoaderData();
  const { deleteNote } = useContext(NotesContext);
  const navigate = useNavigate();
  const onDeleteClick = (noteId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );
    if (!confirm) return;
    deleteNote(noteId);
    alert("Deleted Note Successfuly ");
    navigate("/");
  };
  return (
    <>
      <section className="bg-red-50 min-h-screen">
        <div className="container m-auto py-10 px-6 ">
          <Link
            to="/notes"
            className="text-red-500 hover:text-red-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" />
            Back to Notes
          </Link>
        </div>

        <div className="container m-auto">
          <div className="  flex justify-end  mb-5">
            <Link
              to={`/edit-note/${note.id}`}
              className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-5 rounded-full  focus:outline-none focus:shadow-outline mt-4 block"
            >
              Edit Note
            </Link>
            <div className="px-2"></div>
            <button
              onClick={() => onDeleteClick(note.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-5 rounded-full  focus:outline-none focus:shadow-outline mt-4 block"
            >
              Delete Note
            </button>
          </div>
          <div className="grid grid-cols-1  w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{note.category}</div>
                <h1 className="text-3xl font-bold mb-4">{note.title}</h1>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Description
                </h3>

                <p className="mb-4">{note.description}</p>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

const noteLoader = async ({ params }) => {
  const res = await fetch(`/api/notes/${params.id}`);
  const data = await res.json();
  return data;
};

export { Notepage as default, noteLoader };

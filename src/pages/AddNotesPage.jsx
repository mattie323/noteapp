import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "../contexts/NoteContext";
const AddNotesPage = () => {
  const { addNote } = useContext(NotesContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${month}/${day}/${year}`;
  };
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  const submitForm = (e) => {
    e.preventDefault();
    const titleFirstLetter = capitalizeFirstLetter(title);
    const newNote = {
      title: titleFirstLetter,
      description,
      category,
      date: getCurrentDate(),
    };
    addNote(newNote);
    alert("Created Note Successfully");
    return navigate("/notes");
  };

  return (
    <div className="bg-red-50 min-h-screen">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-xl border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-start font-semibold mb-6">
              New Note:
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Cooking Hotdogs and Eggs"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add your description here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Category:
              </label>
              <div className="flex flex-row gap-5">
                <label>
                  <input
                    className="mr-2"
                    type="radio"
                    id="personal"
                    name="category"
                    required
                    value="personal"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  Personal
                </label>
                <label>
                  <input
                    className="mr-2"
                    type="radio"
                    id="home"
                    name="category"
                    required
                    value="home"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  Home
                </label>
                <label>
                  <input
                    className="mr-2"
                    type="radio"
                    id="business"
                    name="category"
                    required
                    value="business"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  Business
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-5 rounded-full  focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Save Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNotesPage;

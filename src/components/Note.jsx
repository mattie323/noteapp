import { Link } from "react-router-dom";

const Note = ({ notes }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{notes.category}</div>
          <h3 className="text-xl font-bold">{notes.title}</h3>
        </div>
        <div className="mb-5">{notes.description}</div>
        <h3 className="text-red-500 mb-2">Date: {notes.date}</h3>

        <div className="border border-red-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-end mb-4">
          <Link
            to={`/notes/${notes.id}`}
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

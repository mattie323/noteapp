import { NavLink } from "react-router-dom";
import { MdNoteAlt } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const Navbar = () => {
  const selectedNav = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";
  return (
    <nav className="bg-red-500 border-b border-red-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <MdNoteAlt className="h-10 w-auto text-white" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Note App
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={selectedNav}>
                  Home
                </NavLink>
                <NavLink to="/notes" className={selectedNav}>
                  Notes
                </NavLink>
                <NavLink
                  to="/add-notes"
                  className={({ isActive }) =>
                    `${selectedNav({ isActive })} flex items-center`
                  }
                >
                  Add Notes
                  <IoIosAddCircle className="ml-1" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

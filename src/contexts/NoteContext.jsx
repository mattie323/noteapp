import { createContext, useState } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // Function to add a new note
  const addNote = async (newNote) => {
    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      if (!res.ok) {
        throw new Error("Failed to add note");
      }

      const addedNote = await res.json();
      setNotes((prevNotes) => [...prevNotes, addedNote]);
    } catch (error) {
      console.log("Error adding note", error);
    }
  };
  //   const addNote = async (newNote) => {
  //     const res = await fetch("/api/notes", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newNote),
  //     })
  //       .then((response) => response.json())
  //       .then((newNote) => setNotes([...notes, newNote]))
  //       .catch((error) => console.error("Error adding jobs:", error));
  //   };
  //Function to delete a note
  const deleteNote = async (id) => {
    try {
      const res = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete note");
      }

      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    } catch (error) {
      console.log("Error deleting note", error);
    }
  };
  const updateNote = async (note) => {
    try {
      const res = await fetch(`/api/notes/${note.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });

      if (!res.ok) {
        throw new Error("Failed to update job");
      }

      const updatedNote = await res.json();
      setNotes((prevNotes) =>
        prevNotes.map((j) => (j.id === updatedNote.id ? updatedNote : j))
      );
    } catch (error) {
      console.log("Error updating job", error);
    }
  };
  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {children}
    </NotesContext.Provider>
  );
};

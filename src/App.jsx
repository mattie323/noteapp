import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import NotesPage from "./pages/NotesPage";
import AddNotesPage from "./pages/AddNotesPage";
import HomePage from "./pages/HomePage";
import NotePage, { noteLoader } from "./pages/Notepage";
import { NotesProvider } from "./contexts/NoteContext";
import EditNotesPage from "./pages/EditNotesPage";
import Notepage from "./pages/Notepage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/add-notes" element={<AddNotesPage />} />
        <Route path="/notes/:id" element={<Notepage />} loader={noteLoader} />
        <Route
          path="/edit-note/:id"
          element={<EditNotesPage />}
          loader={noteLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return (
    <NotesProvider>
      <RouterProvider router={router} />
    </NotesProvider>
  );
}

export default App;

import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Login } from "@/pages/Login";
import { Notes } from "@/pages/Notes";
import { Register } from "@/pages/Register";
import { NewNote } from "@/pages/NewNote";
import { EditNote } from "@/pages/EditNote";
import { ViewNote } from "@/pages/ViewNote";
import { ProtectedRoute } from "@/app/providers/ProtectedRoute";
import { Settings } from "@/pages/Settings";
import { isTokenValid } from "@/shared/lib/isTokenValid";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to={
                isTokenValid(localStorage.getItem("token") || "")
                  ? "/notes"
                  : "/login"
              }
              replace
            />
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="notes" element={<Notes />} />
          <Route path="notes/new" element={<NewNote />} />
          <Route path="notes/:id" element={<ViewNote />} />
          <Route path="notes/:id/edit" element={<EditNote />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
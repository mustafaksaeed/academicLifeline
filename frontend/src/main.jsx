import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthProvider";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./contexts/ProtectedRoute.jsx";
import Layouts from "./Layouts/Layouts.jsx";
import Courses from "./pages/Courses";
import Assignments from "./pages/Assignments";
import Calendar from "./pages/Calendar";
import AddCourse from "./pages/AddCourse.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<Layouts />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/addcourse" element={<AddCourse />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);

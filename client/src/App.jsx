import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ATSAnalyzer from "./pages/ATSAnalyzer";
import History from "./pages/History";
import ResumeUpload from "./pages/ResumeUpload";
import Result from "./pages/Result";
import ProtectedRoute
from "./components/ProtectedRoute";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

       <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

        <Route
          path="/analyze"
          element={<ATSAnalyzer />}
        />

        <Route
          path="/history"
          element={<History />}
        />

        <Route
          path="/upload"
          element={<ResumeUpload />}
        />

        <Route
          path="/result"
          element={<Result />}
        />

      </Routes>
      <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
    </BrowserRouter>
  );
}

export default App;
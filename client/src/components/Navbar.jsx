import { useState } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  FaMoon,
  FaSun,
  FaUserCircle
} from "react-icons/fa";

import {
  useTheme
} from "../context/ThemeContext";

function Navbar() {

  const {
    darkMode,
    toggleTheme
  } = useTheme();

  const navigate = useNavigate();

  const [open, setOpen] =
    useState(false);

  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );

    sessionStorage.removeItem(
      "token"
    );

    navigate("/");

  };

  return (

    <nav
      className={`shadow px-6 py-4 flex justify-between items-center ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-black"
      }`}
    >

      {/* Logo */}

      <Link
        to="/dashboard"
        className="font-bold text-xl"
      >
        AI Resume ATS Analyzer
      </Link>

      {/* Right Section */}

      <div className="flex items-center gap-4">

        {/* Dark Mode */}

        <button
          onClick={toggleTheme}
          className="text-xl"
        >
          {
            darkMode
              ? <FaSun />
              : <FaMoon />
          }
        </button>

        {/* User Menu */}

        <div className="relative">

          <button
            onClick={() =>
              setOpen(!open)
            }
          >
            <FaUserCircle
              size={30}
            />
          </button>

          {open && (

            <div
              className={`absolute right-0 mt-2 w-52 rounded-xl shadow-lg z-50 ${
                darkMode
                  ? "bg-slate-700 text-white"
                  : "bg-white text-black"
              }`}
            >

              <div className="p-4 border-b">

                <p className="font-semibold">
                  Mathan Kumar
                </p>

                <p className="text-sm opacity-70">
                  AI & DS Student
                </p>

              </div>

              <Link
                to="/dashboard"
                className="block p-3 hover:bg-gray-100 hover:text-black"
              >
                Dashboard
              </Link>

              <Link
                to="/profile"
                className="block p-3 hover:bg-gray-100 hover:text-black"
              >
                Profile
              </Link>

              <Link
                to="/history"
                className="block p-3 hover:bg-gray-100 hover:text-black"
              >
                History
              </Link>

              <button
                className="w-full text-left p-3 hover:bg-gray-100 hover:text-black"
              >
                Settings
              </button>

              <button
                onClick={handleLogout}
                className="w-full text-left p-3 text-red-500 hover:bg-red-50"
              >
                Logout
              </button>

            </div>

          )}

        </div>

      </div>

    </nav>

  );

}

export default Navbar;
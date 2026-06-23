import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
FaGoogle,
FaGithub,
FaEye,
FaEyeSlash
} from "react-icons/fa";

import api from "../services/api";

function Login() {

const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [showPassword, setShowPassword] =
useState(false);

const [loading, setLoading] =
useState(false);

const [rememberMe, setRememberMe] =
useState(false);

useEffect(() => {

const token =
  localStorage.getItem("token");

if (token) {
  navigate("/dashboard");
}

}, [navigate]);

const handleLogin = async () => {

if (!email || !password) {

  alert(
    "Please enter email and password"
  );

  return;
}

try {

  setLoading(true);

  const res =
    await api.post(
      "/auth/login",
      {
        email,
        password
      }
    );

  console.log(
    "LOGIN RESPONSE:",
    res.data
  );

  localStorage.setItem(
    "token",
    res.data.token
  );

  console.log(
    "TOKEN SAVED:",
    localStorage.getItem("token")
  );

  alert(
    "Login Successful"
  );

  navigate("/dashboard");

} catch (err) {

  console.log(err);

  alert(
    err?.response?.data?.message ||
    "Login Failed"
  );

} finally {

  setLoading(false);

}

};

return (

<div className="min-h-screen flex">

  <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white p-12 flex-col justify-center">

    <h1 className="text-5xl font-bold mb-6">
      AI Resume ATS Analyzer
    </h1>

    <p className="text-xl mb-8">
      Improve your resume and increase your interview chances using AI.
    </p>

    <ul className="space-y-4 text-lg">
      <li>✅ ATS Score Analysis</li>
      <li>✅ Skill Gap Detection</li>
      <li>✅ Resume Optimization</li>
      <li>✅ AI Suggestions</li>
      <li>✅ Analysis History</li>
    </ul>

  </div>

  <div className="w-full md:w-1/2 flex justify-center items-center bg-slate-100">

    <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

      <h2 className="text-3xl font-bold mb-2 text-center">
        Welcome Back
      </h2>

      <p className="text-center text-gray-500 mb-6">
        Login to continue
      </p>

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 rounded-xl mb-4"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <div className="relative">

        <input
          type={
            showPassword
              ? "text"
              : "password"
          }
          placeholder="Password"
          className="w-full border p-3 rounded-xl"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          type="button"
          className="absolute right-4 top-4"
          onClick={() =>
            setShowPassword(
              !showPassword
            )
          }
        >
          {
            showPassword
              ? <FaEyeSlash />
              : <FaEye />
          }
        </button>

      </div>

      <div className="flex justify-between items-center mt-4">

        <label className="flex items-center gap-2 text-sm">

          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() =>
              setRememberMe(
                !rememberMe
              )
            }
          />

          Remember Me

        </label>

        <Link
          to="/forgot-password"
          className="text-blue-600 text-sm"
        >
          Forgot Password?
        </Link>

      </div>

      <button
        onClick={handleLogin}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 mt-6 disabled:bg-gray-400"
      >
        {
          loading
            ? "Logging In..."
            : "Login"
        }
      </button>

      <div className="my-6 text-center text-gray-500">
        OR
      </div>

      <button className="w-full border py-3 rounded-xl flex justify-center items-center gap-2 mb-3">
        <FaGoogle />
        Continue with Google
      </button>

      <button className="w-full border py-3 rounded-xl flex justify-center items-center gap-2">
        <FaGithub />
        Continue with GitHub
      </button>

      <p className="mt-6 text-center">

        Don't have an account?

        <Link
          to="/register"
          className="text-blue-600 ml-2"
        >
          Register
        </Link>

      </p>

    </div>

  </div>

</div>

);

}

export default Login;

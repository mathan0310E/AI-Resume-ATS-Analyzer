import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
FaGoogle,
FaGithub,
FaEye,
FaEyeSlash
} from "react-icons/fa";
import api from "../services/api";

function Register() {

const navigate = useNavigate();

const [name, setName] =
useState("");

const [email, setEmail] =
useState("");

const [password, setPassword] =
useState("");

const [confirmPassword,
setConfirmPassword] =
useState("");

const [showPassword,
setShowPassword] =
useState(false);

const handleRegister =
async () => {


  if (
    password !==
    confirmPassword
  ) {

    alert(
      "Passwords do not match"
    );

    return;

  }

  try {

    await api.post(
      "/auth/register",
      {
        name,
        email,
        password
      }
    );

    alert(
      "Registration Successful"
    );

    navigate("/");

  } catch (err) {

    console.log(err);

    alert(
      "Registration Failed"
    );

  }

};


return (


<div className="min-h-screen flex">

  <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white p-12 flex-col justify-center">

    <h1 className="text-5xl font-bold mb-6">
      Join ATS Analyzer
    </h1>

    <p className="text-xl mb-8">
      Create your account and start optimizing resumes with AI.
    </p>

    <ul className="space-y-4 text-lg">

      <li>🚀 AI Resume Analysis</li>
      <li>📈 ATS Score Tracking</li>
      <li>🎯 Skill Gap Detection</li>
      <li>📄 Resume History</li>
      <li>💡 AI Suggestions</li>

    </ul>

  </div>

  <div className="w-full md:w-1/2 flex justify-center items-center bg-slate-100">

    <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

      <h2 className="text-3xl font-bold mb-6 text-center">
        Create Account
      </h2>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full border p-3 rounded-xl mb-4"
        value={name}
        onChange={(e) =>
          setName(
            e.target.value
          )
        }
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 rounded-xl mb-4"
        value={email}
        onChange={(e) =>
          setEmail(
            e.target.value
          )
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
          className="w-full border p-3 rounded-xl mb-4"
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

      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full border p-3 rounded-xl mb-4"
        value={confirmPassword}
        onChange={(e) =>
          setConfirmPassword(
            e.target.value
          )
        }
      />

      <button
        onClick={
          handleRegister
        }
        className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
      >
        Create Account
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

        Already have an account?

        <Link
          to="/"
          className="text-blue-600 ml-2"
        >
          Login
        </Link>

      </p>

    </div>

  </div>

</div>


);

}

export default Register;

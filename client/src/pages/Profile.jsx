import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function Profile() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    totalAnalyses: 0,
    bestScore: 0
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {

    try {

      const res =
        await api.get(
          "/profile"
        );

      setUser(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    window.location.href = "/";

  };

  return (

    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 p-8">

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">

          <div className="flex items-center gap-6">

            <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">

              {user.name?.charAt(0)}

            </div>

            <div>

              <h1 className="text-3xl font-bold">
                {user.name}
              </h1>

              <p className="text-gray-500">
                {user.email}
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div className="bg-slate-50 p-6 rounded-xl">

              <h2 className="text-gray-500">
                Total Analyses
              </h2>

              <p className="text-4xl font-bold">
                {user.totalAnalyses}
              </p>

            </div>

            <div className="bg-slate-50 p-6 rounded-xl">

              <h2 className="text-gray-500">
                Best ATS Score
              </h2>

              <p className="text-4xl font-bold text-green-600">
                {user.bestScore}%
              </p>

            </div>

          </div>

          <button
            onClick={logout}
            className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl"
          >
            Logout
          </button>

        </div>

      </div>

    </>
  );

}

export default Profile;